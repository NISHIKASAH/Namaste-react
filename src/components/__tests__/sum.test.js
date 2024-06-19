import { sum } from "../sum";

test("sum of thefunction of two number", () => {
  const result = sum(3, 5);

  expect(result).toBe(8);
});
