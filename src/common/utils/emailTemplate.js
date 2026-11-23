
export const otpEmailTemplate = ({ otp }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="
        margin: 0;
        padding: 0;
        background-color: #f5f3ff;
        font-family: Arial, Helvetica, sans-serif;
    ">

        <table width="100%" cellpadding="0" cellspacing="0"
            border="0" style="background-color: #f5f3ff;">
            <tr>
                <td align="center" style="padding: 35px 15px;">

                    <!-- Main Card -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                        border="0" style="
                            max-width: 480px;
                            background-color: #ffffff;
                            border-radius: 16px;
                            overflow: hidden;
                        ">

                        <tr>
                            <td align="center" style="padding: 35px 25px 15px;">

                                <h1 style="
                                    margin: 0;
                                    color: #7c3aed;
                                    font-size: 34px;
                                ">
                                    Saraha 💜
                                </h1>

                                <h2 style="
                                    color: #333333;
                                    font-size: 22px;
                                    margin: 25px 0 12px;
                                ">
                                    Verify Your Email
                                </h2>

                                <p style="
                                    color: #666666;
                                    font-size: 15px;
                                    line-height: 24px;
                                    margin: 0;
                                ">
                                    Welcome to Saraha! We're happy
                                    to have you here.
                                </p>

                                <p style="
                                    color: #666666;
                                    font-size: 15px;
                                    line-height: 24px;
                                    margin: 12px 0 25px;
                                ">
                                    Use the code below to verify
                                    your email address.
                                </p>

                            </td>
                        </tr>

                        <!-- OTP Box -->
                        <tr>
                            <td align="center" style="padding: 0 25px;">

                                <table width="100%" cellpadding="0"
                                    cellspacing="0" border="0"
                                    style="
                                        background-color: #f3e8ff;
                                        border-radius: 12px;
                                    ">
                                    <tr>
                                        <td align="center" style="
                                            padding: 22px 10px;
                                            color: #7c3aed;
                                            font-size: 32px;
                                            font-weight: bold;
                                            letter-spacing: 8px;
                                        ">
                                            ${otp}
                                        </td>
                                    </tr>
                                </table>

                            </td>
                        </tr>

                        <tr>
                            <td align="center" style="padding: 22px 25px 30px;">

                                <p style="
                                    color: #555555;
                                    font-size: 14px;
                                    line-height: 22px;
                                    margin: 0;
                                ">
                                    This verification code expires
                                    in <strong>2 minutes</strong>.
                                </p>

                                <p style="
                                    color: #888888;
                                    font-size: 13px;
                                    line-height: 21px;
                                    margin: 20px 0 0;
                                ">
                                    If you didn't request this code,
                                    you can safely ignore this email.
                                </p>

                                <hr style="
                                    border: 0;
                                    border-top: 1px solid #eeeeee;
                                    margin: 25px 0;
                                ">

                                <p style="
                                    color: #7c3aed;
                                    font-size: 14px;
                                    font-weight: bold;
                                    margin: 0;
                                ">
                                    The Saraha Team
                                </p>

                                <p style="
                                    color: #999999;
                                    font-size: 12px;
                                    margin: 8px 0 0;
                                ">
                                    Speak freely. Stay anonymous.
                                </p>

                            </td>
                        </tr>

                    </table>
                    <!-- End Main Card -->

                </td>
            </tr>
        </table>

    </body>
    </html>
    `;
};
