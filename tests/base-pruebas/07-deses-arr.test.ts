import { describe, expect, test } from "@jest/globals";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Test in Desestructured Array", () => {
    test("Debe retornar un Strin y un número", () => {
        const [letters, numbers] = retornaArreglo()
        expect(letters).toBe("ABC")
        expect(typeof (letters)).toBe('string');
        expect(typeof (numbers)).toBe('number');
        expect(letters).toEqual(expect.any(String));
    })
})





