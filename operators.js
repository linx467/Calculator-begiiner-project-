import { Result } from "postcss";
import {  DisplayInput } from "./common";


export function perform(Calculations){
    let Result = math.evaluate(Calculations);
    DisplayInput(Result); 
    return '' + Result;
}

export function backspace(Calculations){
    if(Calculations==='Infinity'){
        Calculations = '';
        DisplayInput(Calculations);
    }
    let UpdatedValue = Calculations.slice(0,-1);
    DisplayInput(UpdatedValue);
    return UpdatedValue;
}

