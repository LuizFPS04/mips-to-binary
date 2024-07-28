"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processIFormat = processIFormat;
exports.processRFormat = processRFormat;
exports.processJFormat = processJFormat;
const completeString_1 = require("../utils/completeString");
const mipsMock_1 = require("../utils/mipsMock");
function processIFormat(commands, traduction, instruction) {
    let lastConst = false;
    let bits;
    for (let regCommand of commands) {
        if (regCommand in mipsMock_1.registers) {
            const register = regCommand;
            if (instruction.mnemonic === "bltz" || instruction.mnemonic === "blez" || instruction.mnemonic === "bgtz") {
                traduction['rs'] = mipsMock_1.registers[register];
                traduction['rt'] = "00000";
            }
            else if (instruction.mnemonic === "bgez") {
                traduction['rs'] = mipsMock_1.registers[register];
                traduction['rt'] = "00001";
            }
            else if (instruction.mnemonic === "bltzal") {
                traduction['rs'] = mipsMock_1.registers[register];
                traduction['rt'] = "10000";
            }
            else if (instruction.mnemonic === "bgezal") {
                traduction['rs'] = mipsMock_1.registers[register];
                traduction['rt'] = "10001";
            }
            else if (instruction.mnemonic === "blez") {
                traduction['rs'] = mipsMock_1.registers[register];
                traduction['rt'] = "00000";
            }
            if (lastConst) {
                traduction['rt'] = traduction['rs'];
                traduction['rs'] = mipsMock_1.registers[register];
                lastConst = false;
            }
            if (instruction.mnemonic === "addi" ||
                instruction.mnemonic === "addiu" ||
                instruction.mnemonic === "slti" ||
                instruction.mnemonic === "sltiu" ||
                instruction.mnemonic === "andi" ||
                instruction.mnemonic === "ori" ||
                instruction.mnemonic === "xori" ||
                instruction.mnemonic === "lui") {
                if (!traduction.rt) {
                    traduction['rt'] = mipsMock_1.registers[register];
                }
                else if (!traduction.rs) {
                    traduction['rs'] = mipsMock_1.registers[register];
                }
            }
            else {
                if (!traduction.rs) {
                    traduction['rs'] = mipsMock_1.registers[register];
                }
                else if (!traduction.rt) {
                    traduction['rt'] = mipsMock_1.registers[register];
                }
            }
        }
        else {
            bits = instruction.encoding.immediate;
            let regCommandBinary = "";
            let regCommandInt = parseInt(regCommand);
            if (regCommandInt >= 0) {
                regCommandBinary = regCommandInt.toString(2);
                traduction['immediate'] = (0, completeString_1.padBinary)(regCommandBinary, bits);
            }
            else {
                regCommandBinary = (regCommandInt >>> 0).toString(2).slice(-bits);
                traduction['immediate'] = regCommandBinary;
            }
            lastConst = true;
        }
    }
    return traduction;
}
function processRFormat(commands, traduction, instruction) {
    var _a, _b;
    traduction['shamt'] = (_a = instruction.encoding) === null || _a === void 0 ? void 0 : _a.shamt;
    traduction['func'] = (_b = instruction.encoding) === null || _b === void 0 ? void 0 : _b.func;
    let bits;
    for (let regCommand of commands) {
        if (regCommand in mipsMock_1.registers) {
            const register = regCommand;
            if (!traduction.rd) {
                bits = instruction.encoding.rd;
                traduction['rd'] = mipsMock_1.registers[register];
            }
            else if (!traduction.rs) {
                bits = instruction.encoding.rs;
                traduction['rs'] = mipsMock_1.registers[register];
            }
            else if (!traduction.rt) {
                bits = instruction.encoding.rt;
                traduction['rt'] = mipsMock_1.registers[register];
            }
        }
    }
    return traduction;
}
function processJFormat(commands, traduction, instruction) {
    let bits;
    for (let regCommand of commands) {
        if (regCommand in mipsMock_1.registers) {
            bits = instruction.encoding.immediate;
            traduction['immediate'] = (0, completeString_1.padBinary)(regCommand, bits);
        }
        else {
            bits = instruction.encoding.immediate;
            let regCommandBinary = "";
            let regCommandInt = parseInt(regCommand);
            if (regCommandInt >= 0) {
                regCommandBinary = regCommandInt.toString(2);
                traduction['immediate'] = (0, completeString_1.padBinary)(regCommandBinary, bits);
            }
            else {
                regCommandBinary = (regCommandInt >>> 0).toString(2).slice(-bits);
                traduction['immediate'] = regCommandBinary;
            }
        }
    }
    return traduction;
}
