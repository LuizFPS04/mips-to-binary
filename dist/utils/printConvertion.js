"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printConvertion = printConvertion;
const completeString_1 = require("./completeString");
function printConvertion(traductionArr) {
    let text = "";
    for (let i = 0; i < traductionArr.length; i++) {
        text += `Instruction: ${traductionArr[i].instruction} | Type: ${traductionArr[i].format}\n`;
        if (traductionArr[i].format === "R") {
            text += `Convertion: ${traductionArr[i].opCode} ${traductionArr[i].rs !== undefined ? traductionArr[i].rs : (0, completeString_1.padBinary)("0", 5)} ${traductionArr[i].rt !== undefined ? traductionArr[i].rt : (0, completeString_1.padBinary)("0", 5)} ${traductionArr[i].rd !== undefined ? traductionArr[i].rd : (0, completeString_1.padBinary)("0", 5)} ${traductionArr[i].shamt !== undefined ? traductionArr[i].shamt : (0, completeString_1.padBinary)("0", 5)} ${traductionArr[i].func}\n`;
            text += '------------------------------------\n';
        }
        else if (traductionArr[i].format === "I") {
            text += `Convertion: ${traductionArr[i].opCode} ${traductionArr[i].rs !== undefined ? traductionArr[i].rs : (0, completeString_1.padBinary)("0", 5)} ${traductionArr[i].rt !== undefined ? traductionArr[i].rt : (0, completeString_1.padBinary)("0", 5)} ${traductionArr[i].immediate}\n`;
            text += '------------------------------------\n';
        }
        else if (traductionArr[i].format === "J") {
            text += `Convertion: ${traductionArr[i].opCode} ${traductionArr[i].immediate}\n`;
            text += '------------------------------------\n';
        }
        else {
            text += "N/A\n";
            text += '------------------------------------\n';
        }
    }
    return text;
}
