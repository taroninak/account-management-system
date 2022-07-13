import { Injectable } from '@nestjs/common';
import { PersonRepository } from './person.repository';
import { Person } from './person.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: PersonRepository,
  ) {}

  async create(name: string, document: string, birthDate: Date) {
    return this.personRepository.save({ name, document, birthDate });
  }
}
