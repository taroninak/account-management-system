import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonService } from './person.service';
import { PersonCreationRequestDto } from './dto/person-creation-request.dto';
import { PersonDto } from './dto/person.dto';
import { mapTo } from '../common/utils/mapper';

@ApiTags('persons')
@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @Get(':personId')
  @ApiOperation({ summary: 'Get specified person information' })
  @ApiResponse({
    status: 200,
    description: 'Sends person info',
    type: PersonDto,
  })
  async get(@Param('personId') personId: number): Promise<PersonDto> {
    const person = this.personService.get(personId);
    return mapTo(PersonDto, person);
  }

  @Post()
  @ApiOperation({ summary: 'Create new person' })
  @ApiResponse({
    status: 200,
    description: 'Sends created person info',
    type: PersonDto,
  })
  async create(@Body() request: PersonCreationRequestDto): Promise<PersonDto> {
    const person = await this.personService.create(
      request.name,
      request.document,
      request.birthDate,
    );
    return mapTo(PersonDto, person);
  }
}
