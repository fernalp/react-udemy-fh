import { describe, expect, test } from "@jest/globals";

import { heroes } from "../../src/data/heroes";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Test in Promises", () => {

    test("getHeoreByIdAsync debe retornar un heroe por ID utilizando then", (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual(heroes.find(hero => hero.id === id));
                done();
            })

    });

    test("getHeoreByIdAsync debe obtener un error si hero no existe", (done) => {

        const id = 100;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                console.log(error);
                done();
            })

    });

});