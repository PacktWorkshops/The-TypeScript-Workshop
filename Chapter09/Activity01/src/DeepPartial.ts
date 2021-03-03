/* export type DeepPartial<T> = T extends string | number | boolean | Function | Date
	? T
	: T extends Map<infer K, infer V>
	? DeepPartialMap<K, V>
	: T extends Set<infer U>
	? DeepPartialSet<U>
	: T extends {}
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: Partial<T>;

interface DeepPartialSet<ItemType> extends Set<DeepPartial<ItemType>> {}
interface DeepPartialMap<KeyType, ValueType> extends Map<DeepPartial<KeyType>, DeepPartial<ValueType>> {}
 */

type PartialPrimitive =
  | string
  | number
  | boolean
  | symbol
  | bigint
  | Function
  | Date;

type DeepPartial<T> = T extends PartialPrimitive
  ? T
  : T extends Array<infer U>
  ? DeepPartialArray<U>
  : T extends Map<infer K, infer V>
  ? DeepPartialMap<K, V>
  : T extends Set<infer U>
  ? DeepPartialSet<U>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}
interface DeepPartialSet<T> extends Set<DeepPartial<T>> {}
interface DeepPartialMap<K, V> extends Map<DeepPartial<K>, DeepPartial<V>> {}

interface User {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  email: string;
  age: number;
  gender: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

declare const User: User;
declare const userUpdateData: DeepPartial<User>;
