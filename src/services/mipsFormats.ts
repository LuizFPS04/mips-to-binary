import { RegisterKeys, Traduction } from "../types/mipsTypes";
import { padBinary } from "../utils/completeString";
import { registers } from "../utils/mipsMock";
import { convertToBinary } from "../utils/numbertToBinary";

export function processIFormat(commands: string[], traduction: Traduction, instruction: any) {
    let lastConst = false;
    let bits: number;

    for (let regCommand of commands) {
        if (regCommand in registers) {
            const register: RegisterKeys = regCommand as RegisterKeys;

            if (
                instruction.mnemonic === "bltz" ||
                instruction.mnemonic === "blez" ||
                instruction.mnemonic === "bgtz"
            ) {
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

            convertToBinary(bits, "I", regCommand, traduction);

            lastConst = true;
        }
    }

    return traduction;
}

export function processRFormat(commands: string[], traduction: Traduction, instruction: any) {

    traduction['shamt'] = instruction.encoding?.shamt;
    traduction['func'] = instruction.encoding?.func;

    let bits: number;
    for (let regCommand of commands) {
        if (regCommand in registers) {
            const register: RegisterKeys = regCommand as RegisterKeys;

            if (
                instruction.mnemonic === "sll" ||
                instruction.mnemonic === "srl" ||
                instruction.mnemonic === "sra"
            ) {
                if (!traduction.rs) {
                    traduction['rs'] = registers['$zero'];
                } else if (!traduction.rd) {
                    traduction['rd'] = registers[register];
                } else if (!traduction.rt) {
                    traduction['rt'] = registers[register];
                }
            } else if (
                instruction.mnemonic === "sllv" ||
                instruction.mnemonic === "srlv" ||
                instruction.mnemonic === "srav"
            ) {
                if (!traduction.rd && !traduction.rt) {
                    traduction['rd'] = registers[register];
                    traduction['rt'] = registers[register];
                } else {
                    traduction['rs'] = registers[register];
                }
            } else if (
                instruction.mnemonic === "mthi" ||
                instruction.mnemonic === "mtlo" ||
                instruction.mnemonic === "jr"
            ) { 
                if (!traduction.rs) {
                    traduction['rs'] = registers[register];
                } else if (!traduction.rt) {
                    traduction['rt'] = registers['$zero'];
                } else if (!traduction.rd) {
                    traduction['rd'] = registers['$zero'];
                }
            } else if (
                instruction.mnemonic === "mfhi" ||
                instruction.mnemonic === "mflo"
            ) { 
                if (!traduction.rs) {
                    traduction['rs'] = registers['$zero'];
                } else if (!traduction.rt) {
                    traduction['rt'] = registers['$zero'];
                } else if (!traduction.rd) {
                    traduction['rd'] = registers[register];
                }
            } else if (instruction.mnemonic === "jalr") { 
                if (!traduction.rt) {
                    traduction['rt'] = registers['$zero'];
                } else if (!traduction.rd) {
                    traduction['rd'] = registers[register];
                } else if (!traduction.rs) {
                    traduction['rs'] = registers[register];
                }
            }
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
        } else {
            if (
                instruction.mnemonic === "sll" ||
                instruction.mnemonic === "srl" ||
                instruction.mnemonic === "sra"
            ) {
                convertToBinary(5, "R", regCommand, traduction);
            }
        }
    }

    return traduction;
}

export function processJFormat(commands: string[], traduction: Traduction, instruction: any) {

    let bits: number;

    for (let regCommand of commands) {
        if (regCommand in registers) {
            bits = instruction.encoding.immediate!;
            traduction['immediate'] = padBinary(regCommand, bits);
        } else {
            bits = instruction.encoding.immediate!;

            convertToBinary(bits, "J", regCommand, traduction);
        }
    }

    return traduction;
}