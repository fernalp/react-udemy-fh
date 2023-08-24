import { describe, expect, test } from "@jest/globals";

describe("sum module", () => {
  const a = 1;
  const b = 2;

  if (a > b) {
    throw new Error("Esto es error");
  }
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  test("Nueva prueba con String", () => {
    expect("Hola Mundo").toBe("Hola Mundo");
  });
});
