import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonRepository } from './person.repository';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { PersonEntity } from './person.entity';
import { randomInt } from 'crypto';

describe('PersonController', () => {
  let personController: PersonController;
  let personRepository: PersonRepository;

  beforeEach(async () => {
    personRepository = new (<jest.Mock<PersonRepository>>PersonRepository)();
    const personService = new PersonService(personRepository);
    personController = new PersonController(personService);
  });

  it('Should return existing person', async () => {
    const expected: PersonEntity = {
      id: randomInt(10000),
      name: randomStringGenerator(),
      birthDate: new Date(),
      document: randomStringGenerator(),
    };

    jest
      .spyOn(personRepository, 'findOneByOrFail')
      .mockImplementationOnce(async () => expected);

    const actual = await personController.get(expected.id);

    expect(actual).toEqual(expected);
  });

  it('Should create person', async () => {
    const expected: PersonEntity = {
      id: randomInt(10000),
      name: randomStringGenerator(),
      birthDate: new Date(),
      document: randomStringGenerator(),
    };

    jest
      .spyOn(personRepository, 'save')
      .mockImplementationOnce(async () => expected);

    const actual = await personController.create({
      name: expected.name,
      birthDate: expected.birthDate,
      document: expected.document,
    });

    expect(actual).toEqual(expected);
  });
});
