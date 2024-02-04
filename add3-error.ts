import { add2 } from './add2.ts'

let obj2: { name: string; age: number };
obj2 = { name: "John" };

export function add3(a: number, b: number, c: number): number
{
  return add2(a, b) + c;
}
