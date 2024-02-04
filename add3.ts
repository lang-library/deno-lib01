import { add2 } from './add2.ts'

export function add3(a: number, b: number, c: number): number
{
  return add2(a, b) + c;
}
