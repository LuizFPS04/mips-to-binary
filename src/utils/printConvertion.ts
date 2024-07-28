import { Traduction } from "../types/mipsTypes";
import { padBinary } from "./completeString";

export function printConvertion(traductionArr: Traduction) {
    let text: string = "";
    for (let i = 0; i < traductionArr.length; i++) {
        if (traductionArr[i].instruction && traductionArr[i].format) {
            text += `Instruction: ${traductionArr[i].instruction} | Type: ${traductionArr[i].format}\n`;
        }

        if (traductionArr[i].format === "R") {
            text += `Convertion: ${traductionArr[i].opCode} ${traductionArr[i].rs !== undefined ? traductionArr[i].rs : padBinary("0", 5)} ${traductionArr[i].rt !== undefined ? traductionArr[i].rt : padBinary("0", 5)} ${traductionArr[i].rd !== undefined ? traductionArr[i].rd : padBinary("0", 5)} ${traductionArr[i].shamt !== undefined ? traductionArr[i].shamt : padBinary("0", 5)} ${traductionArr[i].func}\n`;
            text += '------------------------------------\n';
        } else if (traductionArr[i].format === "I") {
            text += `Convertion: ${traductionArr[i].opCode} ${traductionArr[i].rs !== undefined ? traductionArr[i].rs : padBinary("0", 5)} ${traductionArr[i].rt !== undefined ? traductionArr[i].rt : padBinary("0", 5)} ${traductionArr[i].immediate}\n`;
            text += '------------------------------------\n';
        } else if (traductionArr[i].format === "J") {
            text += `Convertion: ${traductionArr[i].opCode} ${traductionArr[i].immediate}\n`;
            text += '------------------------------------\n';
        } else {
            text += "";
        }
    }
    return text;
}