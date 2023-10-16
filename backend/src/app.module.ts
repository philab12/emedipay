import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { CountryModule } from './country/country.module';
import {config} from "dotenv";
import { HealthCareModule } from './health_care/health_care.module';
import { HealthProfessionsModule } from './health-professions/health-professions.module';
import { StateModule } from './state/state.module';
import { UsersModule } from './users/users.module';
import { UserPortalModule } from './user-portal/user-portal.module';
import { ProvidersModule } from './providers/providers.module';
import { SupportModule } from './support/support.module';
import { IsUniqueConstraint } from './common/validation/is-unique-constraint';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import {join} from 'path';
import {HandlebarsAdapter} from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter"




config();


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ".env"
  }),MailerModule.forRoot({
    transport:{
      host: `${process.env.EMAIL_HOST}`,
      auth: {
        user: `${process.env.EMAIL_USER}`,
        pass: `${process.env.EMAIL_PASS}`
      }
    },
    defaults:{
       from: `${process.env.FROM_EMAIL}`,
    },
    template:{
      dir: join(__dirname, './templates'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      }
    }
  }), TypeOrmModule.forRoot(dataSourceOptions), EventEmitterModule.forRoot(),ScheduleModule.forRoot(), CountryModule, HealthCareModule, HealthProfessionsModule, StateModule, 
  UsersModule, UserPortalModule, ProvidersModule, SupportModule],
  controllers: [],
  providers: [IsUniqueConstraint],
})
export class AppModule {
  constructor(){
    console.log("host", `${process.env.MYSQL_HOST}`)
  }
}
