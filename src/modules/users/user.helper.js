import sendEmail, { generate_OTP } from "../../common/service/sendEmail.js"
import { otpEmailTemplate } from "../../common/utils/emailTemplate.js"
import { eventEmitter } from "../../common/utils/events.js"
import { getValue, incr, setValue, ttl } from "../../DB/service/redis.service.js"
import userModel from "../../DB/models/user.model.js"
import { findOne } from "../../DB/service/db.service.js"
import { Hash } from "../../common/security/hash.js"

export const sendEmailOtp = async ({ email, isConfirmed, subject = "Confirm email" } = {}) => {

    const isBlocked_ttl = await ttl(`otp::block::${email}`)
    if (isBlocked_ttl > 0) {
        throw new Error(`you are blocked and you can resend otp after ${isBlocked_ttl} seconds`)
    }

    if (isBlocked_ttl < 0)
        if (await getValue(`otp::max::${email}`) >= 3) {
            await setValue({
                key: `otp::max::${email}`,
                value: 0,
                ttl: 60 * 5
            })
        }

    const otpTTl = await ttl(`otp::${email}`)
    if (otpTTl > 0)
        throw new Error(`you can resend otp after ${otpTTl} seconds`)

    const max_otp = await getValue(`otp::max::${email}`)
    if (max_otp >= 3) {
        await setValue({
            key: `otp::block::${email}`,
            value: 1,
            ttl: 60 * 10
        })
        throw new Error(`you have exceeded the maximum number of trials`)
    }
    const user = await findOne({
        model: userModel,
        filter: {
            email,
            isConfirmed: { $exists: isConfirmed }
        }
    })

    if (!user)
        throw new Error("user doesnt exist or already confirmed")

    const otp = await generate_OTP()
    const otpHash = await Hash(otp)

    await setValue({
        key: `otp::${email}`,
        value: otpHash,
        ttl: 60 * 2
    })

    eventEmitter.emit("confirm_email", async () => {
        await sendEmail({
            to: email,
            subject,
            html: otpEmailTemplate({ otp })
        })
    })

    await incr(`otp::max::${email}`)
}