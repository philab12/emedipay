import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHealthCareDto } from './dto/create-health_care.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HealthCare } from './entities/health_care.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class HealthCareService {
  constructor(@InjectRepository(HealthCare) private readonly healthCareRep:Repository<HealthCare>){}

  async create(createHealthCareDto: CreateHealthCareDto): Promise<HealthCare> {
    //Check If HealthCare Already Exist
    const health_care = await this.findByHealthCare(createHealthCareDto.health_care);
    if(health_care) throw new HttpException("This Health Care Already Exist",HttpStatus.CONFLICT);
    //If HealthCare Does Not Exist Create New Health Care
    const newHealthCare = this.healthCareRep.create(createHealthCareDto);
    return await this.healthCareRep.save(newHealthCare); 
  }


  async findAll(): Promise<HealthCare[]> {
    return this.healthCareRep.find();
  }

  async findByHealthCare(health_care:string):Promise<HealthCare>{
    return this.healthCareRep.findOne({where:{health_care}})
  }

  async findOne(id: string): Promise<HealthCare> {
    return this.healthCareRep.findOne({where:{id}});
  }

  async update(id: string, createHealthCareDto: CreateHealthCareDto): Promise<HealthCare> {
    const health_care_exist = await this.healthCareRep.findOne({where:{health_care: createHealthCareDto.health_care, id:Not(id)}});
    if(health_care_exist) throw new HttpException("This Health Care Already Exist",HttpStatus.CONFLICT);
    const update_health_care = await this.healthCareRep.update(id, createHealthCareDto);
    if(update_health_care) return await this.findOne(id);
    throw new HttpException("Health Care Could Not Be Update Successfully", HttpStatus.INTERNAL_SERVER_ERROR);
  }

  remove(id: string) {
    const delete_health_care = this.healthCareRep.delete(id);
    if(!delete_health_care) throw new HttpException("Health Care Could Not Be Deleted Successfully", HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
