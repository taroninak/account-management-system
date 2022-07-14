import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonRepository } from './person.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity, PersonRepository])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
