import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { FirstComponent } from "../src/FirstComponent";


describe("Pruebas en componente First Component", () => {

    // test("Debe Hacer Match con el Snapshot", () => {
    //     const { container } = render(<FirstComponent subTitle={4} />);
    //     console.log(container);

    //     expect(container).toMatchSnapshot();

    // });

    test("Debe mostrar el titulo en un h1", () => {
        const title = "Hello World";
        const { container, getByText, getByTestId } = render(<FirstComponent subTitle={4} title={title} />);

        expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);
        expect(h1?.innerHTML).toContain(title);

        expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);

    })

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const subtitle = 5;
        const { container, getByText } = render(<FirstComponent subTitle={subtitle} />)

        expect(container.querySelector('p')?.innerHTML).toContain((subtitle / 2).toString());
        expect(getByText(subtitle / 2)).toBeTruthy();

    })



}) 