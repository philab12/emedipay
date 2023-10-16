import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Support } from './entities/support.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class SupportService {
  constructor(@InjectRepository(Support) private readonly supportRepo:Repository<Support>){}

  async create(createSupportDto: CreateSupportDto) : Promise<Support> {
    // //Check If Support Family Already Exist
    // const support_exist = await this.findByUserSupportID(createSupportDto.user_support_id);
    // if(support_exist) throw new HttpException("This Support Family Already Exist", HttpStatus.CONFLICT);

    const newSupport = this.supportRepo.create(createSupportDto);
    const insertNewSupport = await this.supportRepo.save(newSupport);
    if(insertNewSupport) return insertNewSupport
    throw new HttpException("This Support Family Could Not Be Created Sucessfully", HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async findAll(): Promise<Support[]> {
    return this.supportRepo.find();
  }

  async findByUserSupportID(user_support_id:string) : Promise<Support>{
    return this.supportRepo.findOne({where:{user_support_id}})
  }

  async findOne(id: string): Promise<Support> {
    return  this.supportRepo.findOne({where:{id}});
  }

  async update(id: string, createSupportDto: CreateSupportDto) {
    //Check Id Exist
    const data_exist = await this.findOne(id);
    if(!data_exist) throw new HttpException("This ID Does Not Exist", HttpStatus.NOT_FOUND);
    //Check If This Support Already Exist In Other Field
    const support_exist = await this.supportRepo.findOne({where:{user_support_id:createSupportDto.user_support_id, id:Not(id)}});
    if(support_exist) throw new HttpException("This Support Family Already Exist", HttpStatus.CONFLICT);
    //Update Support Family
    const update_support = await this.supportRepo.update(id, createSupportDto);
    if(update_support) return await this.findOne(id);
    throw new HttpException("Support Family Could Not Be Updated Successfully", HttpStatus.INTERNAL_SERVER_ERROR);

  }

  async remove(id: string) {
        //Check Id Exist
        const data_exist = await this.findOne(id);
        if(!data_exist) throw new HttpException("This ID Does Not Exist", HttpStatus.NOT_FOUND);
        //Delete Support
        const del_support = await this.supportRepo.delete(id);
        if(del_support) return {"message":"This Support Family Deleted Successfully"};
        throw new HttpException("This Support Family Could Not Be Deleted Successfully", HttpStatus.INTERNAL_SERVER_ERROR);
    
  }
}
