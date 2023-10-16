import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateHealthProfessionDto } from './dto/create-health-profession.dto';
import { UpdateHealthProfessionDto } from './dto/update-health-profession.dto';
import { HealthProfession } from './entities/health-profession.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';

@Injectable()
export class HealthProfessionsService {
  constructor(@InjectRepository(HealthProfession) private readonly healthProfRep:Repository<HealthProfession>){}

  async create(createHealthProfessionDto: CreateHealthProfessionDto): Promise<HealthProfession> {
       //Check If HealthCare Already Exist
       const health_prof = await this.findByHealthProfession(createHealthProfessionDto.health_profession);
       if(health_prof) throw new HttpException("This Health Profession Already Exist",HttpStatus.CONFLICT);
       //If Health Prof Does Not Exist Create New Health Care
       const newHealthProf = this.healthProfRep.create(createHealthProfessionDto);
       return await this.healthProfRep.save(newHealthProf); 
  }

  async findAll(): Promise<HealthProfession[]> {
    return this.healthProfRep.find();
  }

  async findByHealthProfession(health_profession:string):Promise<HealthProfession>{
    return this.healthProfRep.findOne({where:{health_profession}})
  }

  async findOne(id: string): Promise<HealthProfession> {
    return this.healthProfRep.findOne({where:{id}});
  }

  async update(id: string, createHealthProfessionDto: CreateHealthProfessionDto) {
    const health_prof_exist = await this.healthProfRep.findOne({where:{health_profession: createHealthProfessionDto.health_profession, id:Not(id)}});
    if(health_prof_exist) throw new HttpException("This Health Care Already Exist",HttpStatus.CONFLICT);
    const update_health_prof = await this.healthProfRep.update(id, createHealthProfessionDto);
    if(update_health_prof) return await this.findOne(id);
    throw new HttpException("Health Profession Could Not Be Update Successfully", HttpStatus.INTERNAL_SERVER_ERROR);
  }

  remove(id: string) {
    const delete_health_prof = this.healthProfRep.delete(id);
    if(!delete_health_prof) throw new HttpException("Health Profession Could Not Be Deleted Successfully", HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
