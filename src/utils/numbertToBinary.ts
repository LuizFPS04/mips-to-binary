import { Traduction } from "../types/mipsTypes";
import { padBinary } from "./completeString";

export function convertToBinary(bits: number, type: string, regCommand: string, traduction: Traduction) {

    let regCommandBinary: string = "";
    let regCommandInt = parseInt(regCommand);

    if (regCommandInt >= 0) {
        regCommandBinary = regCommandInt.toString(2);
        if (type !== "R") {
            traduction['immediate'] = padBinary(regCommandBinary, bits);
        } else {
            traduction['shamt'] = padBinary(regCommandBinary, bits);
        }
        
    } else {
        regCommandBinary = (regCommandInt >>> 0).toString(2).slice(-bits);
        if (type !== "R") {
            traduction['immediate'] = regCommandBinary;
        } else {
            traduction['shamt'] = padBinary(regCommandBinary, bits);
        }   
    }

    return traduction;
}