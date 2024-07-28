import { RegisterKeys } from "../types/mipsTypes";
import { padBinary } from "../utils/completeString";
import { registers } from "../utils/mipsMock";

export function processIFormat(commands: string[], traduction: any, instruction: any) {
    let lastConst = false;
    let bits: number;

    for (let regCommand of commands) {
        if (regCommand in registers) {
            const register: RegisterKeys = regCommand as RegisterKeys;

            if (instruction.mnemonic === "bltz" || instruction.mnemonic === "blez" || instruction.mnemonic === "bgtz") {
                traduction['rs'] = registers[register];
                traduction['rt'] = "00000";
            } else if (instruction.mnemonic === "bgez") {
                traduction['rs'] = registers[register];
                traduction['rt'] = "00001";
            } else if (instruction.mnemonic === "bltzal") {
                traduction['rs'] = registers[register];
                traduction['rt'] = "10000";
            } else if (instruction.mnemonic === "bgezal") {
                traduction['rs'] = registers[register];
                traduction['rt'] = "10001";
            } else if (instruction.mnemonic === "blez") {
                traduction['rs'] = registers[register];
                traduction['rt'] = "00000";
            }

            if (lastConst) {
                traduction['rt'] = traduction['rs'];
                traduction['rs'] = registers[register];
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
                    traduction['rt'] = registers[register];
                } else if (!traduction.rs) {
                    traduction['rs'] = registers[register];
                }
            } else {
                if (!traduction.rs) {
                    traduction['rs'] = registers[register];
                } else if (!traduction.rt) {
                    traduction['rt'] = registers[register];
                }
            }


        } else {
            bits = instruction.encoding.immediate!;

            let regCommandBinary: string = "";
            let regCommandInt = parseInt(regCommand);

            if (regCommandInt >= 0) {
                regCommandBinary = regCommandInt.toString(2);
                traduction['immediate'] = padBinary(regCommandBinary, bits);
            } else {
                regCommandBinary = (regCommandInt >>> 0).toString(2).slice(-bits);
                traduction['immediate'] = regCommandBinary;
            }
            lastConst = true;
        }
    }

    return traduction;
}

export function processRFormat(commands: string[], traduction: any, instruction: any) {

    traduction['shamt'] = instruction.encoding?.shamt;
    traduction['func'] = instruction.encoding?.func;

    let bits: number;
    for (let regCommand of commands) {
        if (regCommand in registers) {
            const register: RegisterKeys = regCommand as RegisterKeys;

            if (!traduction.rd) {
                bits = instruction.encoding.rd!;
                traduction['rd'] = registers[register];
            } else if (!traduction.rs) {
                bits = instruction.encoding.rs!;
                traduction['rs'] = registers[register];
            } else if (!traduction.rt) {
                bits = instruction.encoding.rt!;
                traduction['rt'] = registers[register];
            }
        }
    }

    return traduction;
}

export function processJFormat(commands: string[], traduction: any, instruction: any) {

    let bits: number;

    for (let regCommand of commands) {
        if (regCommand in registers) {
            bits = instruction.encoding.immediate!;
            traduction['immediate'] = padBinary(regCommand, bits);
        } else {
            bits = instruction.encoding.immediate!;

            let regCommandBinary: string = "";
            let regCommandInt = parseInt(regCommand);

            if (regCommandInt >= 0) {
                regCommandBinary = regCommandInt.toString(2);
                traduction['immediate'] = padBinary(regCommandBinary, bits);
            } else {
                regCommandBinary = (regCommandInt >>> 0).toString(2).slice(-bits);
                traduction['immediate'] = regCommandBinary;
            }
        }
    }

    return traduction;
}