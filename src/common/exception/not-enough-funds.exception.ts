import { ForbiddenException } from '@nestjs/common';

export class NotEnoughFundsException extends ForbiddenException {
  constructor(accountId: number) {
    super(`Not enough funds on account: ${accountId}`);
  }
}
