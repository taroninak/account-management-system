import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PersonCreationRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  document: string;

  @ApiProperty()
  @IsNotEmpty()
  birthDate: Date;
}
