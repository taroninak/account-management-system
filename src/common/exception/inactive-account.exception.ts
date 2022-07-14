import { ForbiddenException } from '@nestjs/common';

export class InactiveAccountException extends ForbiddenException {
  constructor(accountId: number) {
    super(
      `Your account:${accountId} is not active. All operations on the account are forbidden`,
    );
  }
}
