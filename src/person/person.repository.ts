import { Repository } from 'typeorm';
import { Person } from './person.entity';

export class PersonRepository extends Repository<Person> {}
