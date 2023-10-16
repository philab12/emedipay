import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import {config} from "dotenv";

config();

@Injectable()
export class MailService {

    constructor(private readonly mailerService:MailerService){}

    sendMail(data:any,message:string): void {
        //console.log(`Welcome new user...${payload.email}`);
        const emailData = {verification_code:data.user_portals[0].verification_code, message};
       // console.log(data.email);
         this.mailerService.sendMail({
          to: data.email,
          from: `${process.env.FROM_EMAIL}`,
          subject: "Verify Account",
         // text: "welcome",
          // html: `<b>Please click on link below to verify your account</b><br/><a href='http://localhost:3005/verify/${payload.verification_code}'>Click Here tO vERIFY</a>`
            template: 'verification',
            context: {
               emailData,
            }
        })
    }

}
