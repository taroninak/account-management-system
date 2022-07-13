import { ClassConstructor } from 'class-transformer/types/interfaces';
import { instanceToPlain, plainToInstance } from 'class-transformer';

export const mapTo = <T, V>(cls: ClassConstructor<T>, object: V) => {
  const plain = instanceToPlain(object);
  return plainToInstance(cls, plain, { excludeExtraneousValues: true });
};
