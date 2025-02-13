export function add(a: number, b: number): number {
  const result = a + b;
  console.log("Add", String(a), "+", String(b), "=", result);
  return result;
}

add(5, 6);
