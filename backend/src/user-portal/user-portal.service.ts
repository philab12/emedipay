import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserPortalDto } from './dto/create-user-portal.dto';
import { UpdateUserPortalDto } from './dto/update-user-portal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPortal } from './entities/user-portal.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class UserPortalService {

  constructor(@InjectRepository(UserPortal) private readonly userPortalRepo:Repository<UserPortal>){}

  async create(createUserPortalDto: CreateUserPortalDto): Promise<UserPortal> {
    //Check If User Portal Already Created
    const user_portal_exist = await this.userPortalRepo.findOne({where:{user_id:createUserPortalDto.user_id, portal:createUserPortalDto.portal}});
    if(user_portal_exist) throw new HttpException("This User Already Linked To This Portal", HttpStatus.CONFLICT)

    //Create New User Portal
    const new_user_portal = this.userPortalRepo.create(createUserPortalDto);
    const insertUserPortal = await this.userPortalRepo.save(new_user_portal);
    if(insertUserPortal) return insertUserPortal;

    throw new HttpException("User Could Not Be Linked To Portal", HttpStatus.INTERNAL_SERVER_ERROR);

  }

  async findAll(): Promise<UserPortal[]> {
    return this.userPortalRepo.find();
  }


  async findOne(id: string): Promise<UserPortal> {
    return this.userPortalRepo.findOne({where:{id}});
  }

  async update(id: string, createUserPortalDto: CreateUserPortalDto): Promise<UserPortal> {
    //Check If ID Exist
    const data_exist = await this.findOne(id);
    if(!data_exist) throw new HttpException("This ID Not Found", HttpStatus.CONFLICT);
    //Check If User Already Linked To This Portal
    const user_portal_exist = await this.userPortalRepo.findOne({where:{user_id:createUserPortalDto.user_id, portal:createUserPortalDto.portal, id:Not(id)}});
    if(user_portal_exist) throw new HttpException("User Already Linked To This Portal", HttpStatus.CONFLICT);

    //Update User Portal
    const update_user_portal = await this.userPortalRepo.update(id, createUserPortalDto);
    if(update_user_portal) return await this.findOne(id);
    throw new HttpException("User Link To Portal Could Not Be Updated Successfully", HttpStatus.CONFLICT);
  }

  async remove(id: string) {
     //Check If ID Exist
     const data_exist = await this.findOne(id);
     if(!data_exist) throw new HttpException("This ID Not Found", HttpStatus.CONFLICT);

     const delUserPortal = await this.userPortalRepo.delete(id);
     if(delUserPortal) return {"message":"Data Deleted Sucessfully"}

     throw new HttpException("User Portal Could Not Be Deleted Sucessfully", HttpStatus.CONFLICT);

  }
}
