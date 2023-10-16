import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { CountryEntity } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';

@Injectable()
export class CountryService {
  
  constructor(@InjectRepository(CountryEntity) private readonly countryRep:Repository<CountryEntity>){}

  async create(createCountryDto: CreateCountryDto): Promise<CountryEntity> {
    //Check That Country Is Unique
    const country_exist = await this.findByCountry(createCountryDto.name);
    if(country_exist) throw new HttpException("This Country Already Exist", HttpStatus.CONFLICT);
    //If Country Does Not exist Then Create New Countr
    const newCountry = this.countryRep.create(createCountryDto);
    return await this.countryRep.save(newCountry);

  }

  async findAll(): Promise<CountryEntity[]> {
    return this.countryRep.find();
  }

  async findByCountry(name: string): Promise<CountryEntity>{
    return this.countryRep.findOne({where:{name}})
  }

  async findOne(id: number): Promise<CountryEntity> {
    return this.countryRep.findOne({where:{id}});
  }

  async update(id: number, createCountryDto: CreateCountryDto) : Promise<CountryEntity>{
    const data_exist = await this.findOne(id);
    if(!data_exist) throw new HttpException("This ID does not exist", HttpStatus.NOT_FOUND);
    const country_exist = await this.countryRep.findOne({where:{name:createCountryDto.name, id:Not(id)}})
    if(country_exist) throw new HttpException("This Country Already Exist", HttpStatus.CONFLICT)
    const updateCountry = this.countryRep.update(id, createCountryDto);
    if(updateCountry) return await this.findOne(id);
    throw new HttpException("Update Not Successful", HttpStatus.INTERNAL_SERVER_ERROR);
  }

 async remove(id: string): Promise<void | undefined> {
    const countryDelete = await this.countryRep.delete(id);
    if(!countryDelete) throw new HttpException("Deleting Country Was Unsuccessful", HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
