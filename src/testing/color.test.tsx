import ReactDOM from "react-dom";
import Color from "../components/Color";
import { SetStateAction } from 'react';

describe('"Color" component test', () => {
    
    let container:HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Color colorPrice={0} setColorPrice={function (value: SetStateAction<number>): void {
            throw new Error("Function not implemented.");
        } } />, container)
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders "Inputs" correctly', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);

        inputs.forEach(input => {
            expect(input.name).toBe('radio-color');
        })
        
        expect(inputs[0].value).toBe('snow');
        expect(inputs[1].value).toBe('volcano');
        expect(inputs[2].value).toBe('sky');
    })
})