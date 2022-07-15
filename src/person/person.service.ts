import { Injectable } from '@nestjs/common';
import { PersonRepository } from './person.repository';
import { PersonEntity } from './person.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: PersonRepository,
  ) {}

  async create(name: string, document: string, birthDate: Date) {
    return this.personRepository.save({ name, document, birthDate });
  }

  async get(personId: number) {
    return this.personRepository.findOneByOrFail({ id: personId });
  }
}
