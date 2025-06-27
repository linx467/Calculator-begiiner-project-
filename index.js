
import './index.css';


import { backspacebtn, buttonsContainer, DisplayInput } from './common';
import { backspace, perform } from './operators';


let Calculations = "";

buttonsContainer.addEventListener("click", (event) => {
    if (event.target.closest("button") === backspacebtn) {
         Calculations = backspace(Calculations);
    }
    else if (event.target.textContent === '=') {
        Calculations = perform(Calculations);
    }
    else {
        Calculations = Calculations + event.target.textContent;
        DisplayInput(Calculations);
    }
})

