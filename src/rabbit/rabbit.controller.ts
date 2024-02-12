import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RabbitService } from './rabbit.service';
import { CreateRabbitDto } from './dto/create-rabbit.dto';
import { UpdateRabbitDto } from './dto/update-rabbit.dto';

@Controller('rabbit')
export class RabbitController {
  constructor(private readonly rabbitService: RabbitService) {}

  @Post()
  create() {
    return this.rabbitService.create();
  }

  @Get()
  findAll() {
    return this.rabbitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rabbitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRabbitDto: UpdateRabbitDto) {
    return this.rabbitService.update(+id, updateRabbitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rabbitService.remove(+id);
  }
}
