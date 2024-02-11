import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity)
  private userRepository:Repository<UserEntity>,){}

  async create(createUserDto: CreateUserDto) {
    try{

      const user = new UserEntity()

      user.name = createUserDto.name
      user.email = createUserDto.email
      user.password = createUserDto.password

      return await this.userRepository.save(user)

    }catch(err){
      throw err
    }
  }

  async findAll() {
    try{
      return await this.userRepository.find()
    }catch(err){
      throw err
    }
  }

  async findOne(userId: number) {
    try{
      return await this.userRepository.findOne(userId)
    }catch(err){
      throw err
    }
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    try{
      return await this.userRepository.save({...updateUserDto, id: Number(userId)})
    }catch(err){
      throw err
    }
  }

  async remove(userId: number) {
    try{
      return await this, this.userRepository.delete(userId)
    }catch(err){
      throw err
    }
  }
}
