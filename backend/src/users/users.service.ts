import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { EntityManager, Not, Repository } from 'typeorm';
import { UserSupportDto } from 'src/common/dtos/user.support.dto';
import { UserPortal } from 'src/user-portal/entities/user-portal.entity';
import { Support } from 'src/support/entities/support.entity';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { UserSupportCreatedEvent } from 'src/events/user-support-created.event';
import { MailService } from 'src/mail/mail.service';
import { UserProviderDto } from 'src/common/dtos/user.provider.dto';
import { Provider } from 'src/providers/entities/provider.entity';
// import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>, private readonly entityManager: EntityManager, 
  private readonly eventEmitter:EventEmitter2, private readonly mailService:MailService){}

  async create(createUserDto: CreateUserDto) {
    //check if user exist
    // const user_exist = await this.findUserByEmail(createUserDto.email)
    // if(user_exist) throw new HttpException("User Already Registered With This Email", HttpStatus.CONFLICT)
     //Created New User
    const SALT = await bcrypt.genSalt();
    const pass_encrypt = await bcrypt.hash(createUserDto.password, SALT);
    const newUser = this.userRepo.create({...createUserDto, password:pass_encrypt});
    const insertUser = await this.userRepo.save(newUser);
    if(insertUser) return insertUser

    throw new HttpException("User Could Not Be Created Successfully", HttpStatus.INTERNAL_SERVER_ERROR);


  }

//Create Support User Portal
  async create_support_user_portal(userSupportDto: UserSupportDto){
   
    const user_portals = userSupportDto.user_portals.map(createUserPortalDto => new UserPortal(createUserPortalDto))
   const supports = userSupportDto.supports.map(createSupportDto => new Support(createSupportDto))
   

   const user = new User({...userSupportDto.user, user_portals, supports});
//console.log(user);
 const saveData =  await this.entityManager.save(user);

  if(saveData)
  {
   this.eventEmitter.emit("user_support_created", saveData);
   return {"message":"User Registered Sucessfully...Please Click On The Link Sent To Your Mail To Verify Your Account And Continue Your Dependent Registration"};
  }
       
  }

  @OnEvent('user_support_created')
   verificationCodeEmail(payload: User){
    const message = "Please click the button below to confirm your email and continue with the dependent registration"
    return this.mailService.sendMail(payload,message);
    // console.log(`Welcome new user...${payload.email}`);
    // await this.mailerService.sendMail({
    //   to: "philipgyamfi87@gmail.com",
    //   from: "philab.pg@gmail.com",
    //   subject: "Verify Account",
    //   text: "welcome",
    //   // html: `<b>Please click on link below to verify your account</b><br/><a href='http://localhost:3005/verify/${payload.verification_code}'>Click Here tO vERIFY</a>`
    // })

  }





  //Create Provider User Portal
  async create_provider_user_portal(userProviderDto: UserProviderDto){
   
    const user_portals = userProviderDto.user_portals.map(createUserPortalDto => new UserPortal(createUserPortalDto))
   const providers = userProviderDto.providers.map(createProviderDto =>  new Provider({...createProviderDto, user_portals}))
   

   const user = new User({...userProviderDto.user, user_portals, providers});
//console.log(user);
 const saveData =  await this.entityManager.save(user);

 //console.log(saveData);

  if(saveData)
  {
   this.eventEmitter.emit("user_provider_created", saveData);
   return {"message":"User Registered Sucessfully...Please Click On The Link Sent To Your Mail To Verify Your Account"};
  }
       
  }




  @OnEvent('user_provider_created')
  verificationCodeEmailProvider(payload: User){
   const message = "Please click the button below to confirm your email"
   return this.mailService.sendMail(payload,message);

 }

  

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findUserByEmail(email:string):Promise<User>{
    return this.userRepo.findOne({where:{email}})
  }

  async findOne(id: string): Promise<User> {
    return this.userRepo.findOne({where:{id}});
  }

  async update(id: string, createUserDto: CreateUserDto): Promise<User> {
    //Check If ID exist
    const data_exist = await this.findOne(id);
    if(!data_exist) throw new HttpException("This ID Does Not Exist", HttpStatus.CONFLICT);
    //Check If User Exist
    const user_exist = this.userRepo.findOne({where:{email:createUserDto.email, id:Not(id)}});
    if(user_exist) throw new HttpException("User Already Registered With This Email", HttpStatus.CONFLICT);
    const updateUser = await this.userRepo.update(id, createUserDto);
    if(updateUser) return this.findOne(id);
    throw new HttpException("This User Not Updated Successfully", HttpStatus.INTERNAL_SERVER_ERROR)
  }

  async remove(id: string) {
  //Check If ID exist
  const data_exist = await this.findOne(id);
  if(!data_exist) throw new HttpException("This ID Does Not Exist", HttpStatus.CONFLICT);
    const del_user = this.userRepo.delete(id);
    if(del_user){
    return {message:"User Deleted Successfully"}
    }

    throw new HttpException("User Could Not Be Deleted", HttpStatus.CONFLICT);
  }
}
