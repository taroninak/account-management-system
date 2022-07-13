import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PersonDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  document: string;

  @ApiProperty()
  @Expose()
  birthDate: string;
}
