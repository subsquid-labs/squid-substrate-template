import { Store } from "@subsquid/substrate-processor";
import { DeepPartial } from "typeorm";
import { FindManyOptions } from "typeorm/find-options/FindManyOptions";
import { ObjectID } from "typeorm/driver/mongodb/typings";
import { FindConditions } from "typeorm/find-options/FindConditions";
import { FindOneOptions } from "typeorm/find-options/FindOneOptions";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { NotFoundError } from "../../utils/errors";

export const findById = <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  id: string
): Promise<T | undefined> => {
  return store.getRepository(EntityConstructor).findOne(id);
};

export const findByCriteria = <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  options?: FindOneOptions<T>
): Promise<T | undefined> => {
  return store.getRepository(EntityConstructor).findOne(options);
};

export const findMany = <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  options?: FindManyOptions<T>
): Promise<T[]> => {
  return store.getRepository(EntityConstructor).find(options);
};

export const findManyAndCount = <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  options?: FindManyOptions<T>
): Promise<[T[], number]> => {
  return store.getRepository(EntityConstructor).findAndCount(options);
};

export const findManyByIds = <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  ids: string[]
): Promise<T[]> => {
  return store.getRepository(EntityConstructor).findByIds(ids);
};

export const upsert = <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  data: DeepPartial<T>
): Promise<T> => {
  const entity = new EntityConstructor(data);
  return store.save(entity);
};

export const insert = async <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  data: T
): Promise<void> => {
  await store.insert(EntityConstructor, data);
};

export const insertAndReturn = async <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  data: T & { id: string }
): Promise<T> => {
  await insert(store, EntityConstructor, data);
  const entity = await store.findOne(EntityConstructor, {
    where: { id: data.id },
  });
  // We are sure that entity is not undefined, since insert function would have thrown an error before.
  return entity as T;
};

export const update = async <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  criteria: FindConditions<T>,
  data: DeepPartial<T>
): Promise<void> => {
  const updateResult = await store.update(
    EntityConstructor,
    criteria,
    data as QueryDeepPartialEntity<T>
  );
  if (!updateResult.affected) {
    throw new NotFoundError(EntityConstructor.name, { criteria });
  }
};

export const updateAndReturn = async <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  criteria: FindConditions<T>,
  data: DeepPartial<T>
): Promise<T> => {
  await update(store, EntityConstructor, criteria, data);
  const entity = await store.findOne(EntityConstructor, criteria);
  // We are sure that entity is not undefined, since update function would have thrown an error before.
  return entity as T;
};

export const deleteMany = async <T>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  criteria:
    | string
    | string[]
    | number
    | number[]
    | Date
    | Date[]
    | ObjectID
    | ObjectID[]
    | FindConditions<T>
): Promise<void> => {
  // todo; Remake it on repository.clear()?
  await store.getRepository(EntityConstructor).delete(criteria);
};

type EntityConstructor<T> = {
  new (...args: any[]): T;
};
