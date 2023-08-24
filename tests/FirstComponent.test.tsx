import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { FirstComponent } from "../src/FirstComponent";


describe("Pruebas en componente First Component", () => {
    test("Debe Hacer Match con el Snapshot", () => {
        const { container } = render(<FirstComponent subTitle={4} />);
        console.log(container);

        expect(container).toMatchSnapshot();

    });

    test("Debe mostrar el titulo en un h1", () => {
        const title = "Hello World";
        const { getByText } = render(<FirstComponent subTitle={4} title={title} />);

        expect(getByText(title)).toBeTruthy();
    })
})