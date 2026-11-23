import nodemailer from "nodemailer";
import { randomInt } from "node:crypto";


const sendEmail = async({to,subject,html,attachments}={})=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"asmaakhaled0606@gmail.com",
            pass:"caquexlokaspceho"
        }
    })

    await transporter.verify();
console.log("Gmail connection successful!");

    const info = await transporter.sendMail({
        from: '"smsm" <asmaakhaled0606@gmail.com>',
        to ,
        subject ,
        html: html || "",
        attachments: attachments || []
    });
    
    return info.accepted.length > 0 ? true : false

}

export const generate_OTP = async () => {
    return randomInt(100000,1000000).toString()
}


export default sendEmail