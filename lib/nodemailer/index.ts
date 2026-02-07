import nodemailer from 'nodemailer'
import {WELCOME_EMAIL_TEMPLATE} from "@/lib/nodemailer/template";
export const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.NODEMAILER_EMAIL!,
        pass:process.env.NODEMAILER_PASSWORDS!,
    }
})
export const sendWelcomeEmail=async ({email,name,intro}:WelcomeEmailData)=>{
    const htmlTemplate= WELCOME_EMAIL_TEMPLATE.replace('{{name}}',name).replace('{{intro}}',intro);

    const mailOptions={
        from:`"Signalist" <signalist@sl.pro>`,
        to:email,
        subject:`Welcome to Signalist - your stock market Toolkit is ready!`,
        text:'Thanks fro Joining Signalist',
        html: htmlTemplate,

    }
    await transport.sendMail(mailOptions);
}
