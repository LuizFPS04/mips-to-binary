import { RegisterKeys } from "../types/mipsTypes";
import { readArchive } from "../utils/loadArchive";
import { padBinary } from "../utils/completeString";
import { instructions, registers } from "../utils/mipsMock";

const ARCHIVE_1 = "./src/docs/programa1.txt";
const ARCHIVE_2 = "./src/docs/programa2.txt";
const ARCHIVE_3 = "./src/docs/programa3.txt";

export async function convertFileOne() {
    const file = await readArchive(ARCHIVE_2);
    const enterData = file.split("\r\n");

    let traduction: any = {};

    for (let line of enterData) {
        line = line.replace(/\(/g, " ");
        line = line.replace(/\)/g, "");
        line = line.replace(/,/g, "");

        let commands = line.split(" ");

        const command = commands[0];
        const instruction = instructions[command];

        if (instruction) {
            commands = commands.slice(1); // Use slice instead of splice to avoid modifying the original array

            const opCode = instruction?.encoding ? instruction.encoding.opCode : "";
            traduction['opCode'] = opCode;

            const mipsFormat = instruction.format;

            let bits: number;
            let lastConst = false;
            for (let regCommand of commands) {
                if (regCommand in registers) {
                    const register: RegisterKeys = regCommand as RegisterKeys;
                    if (mipsFormat === "I") {
                        if (lastConst) {
                            traduction['rs'] = registers[register];
                            lastConst = false;
                        } 
                        if (!traduction.rd) {
                            traduction['rd'] = registers[register];
                        } 
                        else if (!traduction.rs) {
                            traduction['rs'] = registers[register];
                        }
                    } else if (mipsFormat === "R") {
                        if (!traduction.rs) {
                            traduction['rs'] = registers[register];
                        } else if (!traduction.rt) {
                            traduction['rt'] = registers[register];
                        } else if (!traduction.rd) {
                            traduction['rd'] = registers[register];
                        }
                    }
                } else {
                    if (mipsFormat === "I") {
                        bits = instruction.encoding.immediate!;
                        let regCommandBinary = parseInt(regCommand).toString(2);
                        traduction['immediate'] = padBinary(regCommandBinary, bits);
                    } else if (mipsFormat === "R") {
                        bits = instruction.encoding.func!;
                        let regCommandBinary = parseInt(regCommand).toString(2);
                        traduction['func'] = padBinary(regCommandBinary, bits);
                    }
                    lastConst = true;
                }
            }

            if (mipsFormat === "I" && !traduction['immediate']) {
                bits = instruction.encoding.immediate!;
                traduction['immediate'] = padBinary("0", bits);
            } else if (mipsFormat === "R" && !traduction['func']) {
                bits = instruction.encoding.func!;
                traduction['func'] = padBinary("0", bits);
            }
        }
    }

    return traduction;
}
