import ReactDOM from "react-dom";
import { SetStateAction } from 'react';
import OptionPackage from "../components/OptionPackage";

describe('"Option Package" component test', () => {
    
    let container:HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<OptionPackage packagePrice={0} setPackagePrice={function (value: SetStateAction<number>): void {
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
            expect(input.name).toBe('radio-package');
        })
        
        expect(inputs[0].value).toBe('basic');
        expect(inputs[1].value).toBe('sport');
        expect(inputs[2].value).toBe('lux');
    })
})