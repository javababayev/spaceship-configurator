import ReactDOM from "react-dom";
import { SetStateAction } from 'react';
import Power from "../components/Power";

describe('"Power" component test', () => {
    
    let container:HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Power powerPrice={0} setPowerPrice={function (value: SetStateAction<number>): void {
            throw new Error("Function not implemented.");
        } }/>, container)
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders "Inputs" correctly', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);

        inputs.forEach(input => {
            expect(input.name).toBe('radio-power');
        })
        
        expect(inputs[0].value).toBe('100-mw');
        expect(inputs[1].value).toBe('150-mw');
        expect(inputs[2].value).toBe('200-mw');
    })
})