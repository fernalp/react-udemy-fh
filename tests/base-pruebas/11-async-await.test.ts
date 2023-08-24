import { describe, expect, test } from "@jest/globals";
import { getImage } from "../../src/base-pruebas/11-async-await";



describe("Test in Async and Await", () => {

    test("getImage debe retornar un URL de imagen", async () => {

        const image = await getImage();
        console.log(image);
        expect(typeof image).toBe("string");

    });

});