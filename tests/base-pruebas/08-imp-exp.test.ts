import { describe, expect, test } from "@jest/globals";

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe("Test in Export and Import", () => {

    test("getHeoreById debe retornar un heroe por ID", () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" })

    });

    test("getHeoreById debe retornar undefined si no existe el id", () => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy(); //Null Undefined 

    });

    test("getHeoreByOwner debe retornar los heroes de DC", () => {

        const owner = "DC";
        const heros = getHeroesByOwner(owner);

        expect(heros.length).toBe(3);

        expect(heros).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(heros).toEqual(heroes.filter((hero) => {
            return hero.owner === owner;
        }));

    });

    test("getHeoreByOwner debe retornar los heroes de Marvel", () => {

        const owner = "Marvel";
        const heros = getHeroesByOwner(owner);

        expect(heros.length).toBe(2);

        expect(heros).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);

        expect(heros).toEqual(heroes.filter((hero) => {
            return hero.owner === owner;
        }));
    });

})

