import { describe, expect, test } from "@jest/globals";
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Test template String', () => {

    const name = "Fernando";
    test('getSaludo debe retornar Hola Fernando', (): void => {
        expect(getSaludo(name)).toBe(`Hola ${name}`)
    })
})
