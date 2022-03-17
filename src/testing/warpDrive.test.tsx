import ReactDOM from "react-dom";
import { SetStateAction } from 'react';
import WarpDrive from "../components/WarpDrive";

describe('"Warp Drive" component test', () => {
    
    let container:HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<WarpDrive drivePrice={0} setDrivePrice={function (value: SetStateAction<number>): void {
            throw new Error("Function not implemented.");
        } }/>, container)
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders "Inputs" correctly', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(2);

        inputs.forEach(input => {
            expect(input.name).toBe('radio-warp');
        })
        
        expect(inputs[0].value).toBe('no');
        expect(inputs[1].value).toBe('yes');
    })
})