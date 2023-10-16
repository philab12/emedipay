import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './entities/state.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class StateService {

  constructor(@InjectRepository(State) private readonly stateRepo:Repository<State>){}

  async create(createStateDto: CreateStateDto): Promise<State> {
    //Check If State Already Exist In Country
    const state_exist = await this.findByState(createStateDto.state_name, createStateDto.country_id);
    if(state_exist) throw new HttpException("State Already Exist", HttpStatus.CONFLICT);

    //Is State Does Not Exist Create New State
    const newState = this.stateRepo.create(createStateDto);
    const insertState = await this.stateRepo.save(newState);
    if(insertState) return insertState;
    throw new HttpException("State Could Not Be Saved", HttpStatus.INTERNAL_SERVER_ERROR);
  }

  findAll(): Promise<State[]> {
    return this.stateRepo.find();
  }

  findByState(state:string, country_id){
    return this.stateRepo.findOne({where:{state_name:state, country_id}});
  }

  findOne(id: number): Promise<State> {
    return this.stateRepo.findOne({where:{id}});
  }

  async update(id: number, createStateDto: CreateStateDto): Promise<State>  {
    //Check If ID Passed Exist
    const id_data = await this.findOne(id);
    if(!id_data) throw new HttpException("This ID Does Not Exist", HttpStatus.NOT_FOUND);
    //Check If State Already Exsist In Another Field With Same Country
    const state_exist = await this.stateRepo.findOne({where:{state_name:createStateDto.state_name, country_id:createStateDto.country_id, id:Not(id)}});
    if(state_exist) throw new HttpException("This State Already Exist", HttpStatus.CONFLICT);

    //Update State
    const update_state = await this.stateRepo.update(id, createStateDto);
    if(update_state) return id_data
  
    throw new HttpException("State Update Not Successfull", HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async remove(id: number) {
    const data_exist = this.findOne(id);
    if(!data_exist) throw new HttpException("This ID Does Not Exist", HttpStatus.NOT_FOUND)
    this.stateRepo.delete(id);
    
  }
}
