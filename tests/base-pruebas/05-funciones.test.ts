import { describe, expect, test } from "@jest/globals";
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe("Test in 05 - Funciones", () => {
    test("getUser debe retornar un user", () => {

        const userExpect = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(userExpect).toEqual(user);
    })

    test("getUserUsuarioActivo", () => {
        const name = "fernando";
        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})



