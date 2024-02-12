//usar esse codigo para rodar td pelo docker compose ateh a api
//muda isso apenas de localhost para o nome do servico 'amqp://admin:admin@rabbitmq:5672'
import { Global, Module } from '@nestjs/common';
import { RabbitService } from './rabbit.service';
import { RabbitController } from './rabbit.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rabbit } from './entities/rabbit.entity';

@Global()
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri : 'amqp://admin:admin@rabbitmq:5672' ,
    }),
    TypeOrmModule.forFeature([Rabbit])
  ],
  controllers: [RabbitController],
  providers: [RabbitService],
  exports: [RabbitMQModule, TypeOrmModule]
})
export class RabbitModule {}


//USAR ESSE ARQUIVO ABAIXO PARA RODAR COM DOCKER E API RODANO NO NPM RUN START:DEV
//muda apenas o nome do servico para localhost  'amqp://admin:admin@localhost:5672'
// import { Global, Module } from '@nestjs/common';
// import { RabbitService } from './rabbit.service';
// import { RabbitController } from './rabbit.controller';
// import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Rabbit } from './entities/rabbit.entity';

// @Global()
// @Module({
//   imports: [
//     RabbitMQModule.forRoot(RabbitMQModule, {
//       uri : 'amqp://admin:admin@localhost:5672' ,
//     }),
//     TypeOrmModule.forFeature([Rabbit])
//   ],
//   controllers: [RabbitController],
//   providers: [RabbitService],
//   exports: [RabbitMQModule, TypeOrmModule]
// })
// export class RabbitModule {}
