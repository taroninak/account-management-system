import { Repository } from 'typeorm';
import { PersonEntity } from './person.entity';

export class PersonRepository extends Repository<PersonEntity> {}
