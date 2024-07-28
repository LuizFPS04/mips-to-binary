import { Traduction } from "../types/mipsTypes";
import { readArchive, writeArchive } from "../utils/loadArchive";
import { instructions } from "../utils/mipsMock";
import { printConvertion } from "../utils/printConvertion";
import { processIFormat, processRFormat, processJFormat } from "./mipsFormats";

const ARCHIVE_1 = "./src/docs/programa1.txt";
const ARCHIVE_2 = "./src/docs/programa2.txt";
const ARCHIVE_3 = "./src/docs/programa3.txt";

export async function convertMipsFile() {
    const file = await readArchive(ARCHIVE_1);
    const enterData = file.split("\r\n");

    let traductionArr: Traduction = [];

    for (let line of enterData) {
        let traduction: any = {};

        traduction['instruction'] = line;

        line = line.replace(/\(/g, " ");
        line = line.replace(/\)/g, "");
        line = line.replace(/,/g, "");
        line = line.replace(/\s+/, " ");

        let commands = line.split(" ");

        const command = commands[0];
        const instruction = instructions[command];

        if (instruction) {
            commands = commands.slice(1);

            const opCode = instruction?.encoding ? instruction.encoding.opCode : "";
            const mipsFormat = instruction.format;

            traduction['format'] = mipsFormat;
            traduction['opCode'] = opCode;

            if (mipsFormat === "I") {
                traduction = processIFormat(commands, traduction, instruction);
            } else if (mipsFormat === "R") {
                traduction = processRFormat(commands, traduction, instruction);
            } else if (mipsFormat === "J") {
                traduction = processJFormat(commands, traduction, instruction);
            }
        }
        traductionArr.push(traduction);
    }

    writeArchive(printConvertion(traductionArr));
    return printConvertion(traductionArr);
}