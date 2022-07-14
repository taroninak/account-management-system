import { Repository } from 'typeorm';
import { AccountEntity } from './account.entity';

export class AccountRepository extends Repository<AccountEntity> {}
