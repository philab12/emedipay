import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './entities/provider.entity';
import { Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProvidersService {
  constructor(@InjectRepository(Provider) private readonly providerRepo: Repository<Provider>){}
  async create(createProviderDto: CreateProviderDto) {
      //Check If Provider Already Exist
      // const provider_exist = await this.findProviderByEmail(createProviderDto.email);
      // if(provider_exist) throw new HttpException("Provider Already Exist", HttpStatus.CONFLICT)
      //Create New Provider
    const newProvider = this.providerRepo.create(createProviderDto)
    const insertProvider = await this.providerRepo.save(newProvider);
    if(insertProvider) return insertProvider;
    throw new HttpException("Provider Could Not Be Inserted Successfully", HttpStatus.CONFLICT)
  }

  async findAll(): Promise<Provider[]> {
    return this.providerRepo.find();
  }

  // async findProviderByEmail(email:string): Promise<Provider>{
  //   return this.providerRepo.findOne({where:{email}})
  // }

  findOne(id: string): Promise<Provider> {
    return this.providerRepo.findOne({where:{id}});
  }

  
  async update(id: string, createProviderDto: CreateProviderDto) {
    //Check If ID Exist
    const data_exist = await this.findOne(id);
    if(!data_exist) throw new HttpException("This ID Does Not Exist", HttpStatus.NOT_FOUND);
    //Check If Provider Already Exist
    const provider_exist = this.providerRepo.findOne({where:{email:createProviderDto.email, id:Not(id)}});
    if(provider_exist) throw new HttpException("Provider Already Exist", HttpStatus.CONFLICT);

    const provider_update = await this.providerRepo.update(id, createProviderDto);
    if(provider_update) return await this.findOne(id);
    throw new HttpException("Provider Could Not Be Updated Successfully", HttpStatus.INTERNAL_SERVER_ERROR)

  }


  async remove(id: string) {
       //Check If ID Exist
       const data_exist = await this.findOne(id);
       if(!data_exist) throw new HttpException("This ID Does Not Exist", HttpStatus.NOT_FOUND);
       const delProvider = await this.providerRepo.delete(id);
       if(delProvider) return {"message":"Provider Deleted Successfully"};
      throw new HttpException("Provider Did Not Delete Successfully", HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
