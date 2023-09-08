import { createTransport } from "nodemailer";

export async function sendEmail(subject: string, text: string) {
  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  console.log({
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    USERNAME_FROM: process.env.USERNAME_FROM,
    EMAIL_TO: process.env.EMAIL_TO,
  });

  const info = await transporter.sendMail({
    from: `"${process.env.USERNAME_FROM}" <${process.env.EMAIL_FROM}>`, // sender address
    to: process.env.EMAIL_TO, // list of receivers
    subject: subject, // Subject line
    html: text, // html body
  });
  console.log({ info });
}
