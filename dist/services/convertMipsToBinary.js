"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMipsFile = convertMipsFile;
const loadArchive_1 = require("../utils/loadArchive");
const mipsMock_1 = require("../utils/mipsMock");
const printConvertion_1 = require("../utils/printConvertion");
const mipsFormats_1 = require("./mipsFormats");
const ARCHIVE_1 = "./src/docs/programa1.txt";
const ARCHIVE_2 = "./src/docs/programa2.txt";
const ARCHIVE_3 = "./src/docs/programa3.txt";
async function convertMipsFile() {
    const file = await (0, loadArchive_1.readArchive)(ARCHIVE_1);
    const enterData = file.split("\r\n");
    let traductionArr = [];
    for (let line of enterData) {
        let traduction = {};
        traduction['instruction'] = line;
        line = line.replace(/\(/g, " ");
        line = line.replace(/\)/g, "");
        line = line.replace(/,/g, "");
        line = line.replace(/\s+/, " ");
        let commands = line.split(" ");
        const command = commands[0];
        const instruction = mipsMock_1.instructions[command];
        if (instruction) {
            commands = commands.slice(1);
            const opCode = (instruction === null || instruction === void 0 ? void 0 : instruction.encoding) ? instruction.encoding.opCode : "";
            const mipsFormat = instruction.format;
            traduction['format'] = mipsFormat;
            traduction['opCode'] = opCode;
            if (mipsFormat === "I") {
                traduction = (0, mipsFormats_1.processIFormat)(commands, traduction, instruction);
            }
            else if (mipsFormat === "R") {
                traduction = (0, mipsFormats_1.processRFormat)(commands, traduction, instruction);
            }
            else if (mipsFormat === "J") {
                traduction = (0, mipsFormats_1.processJFormat)(commands, traduction, instruction);
            }
        }
        traductionArr.push(traduction);
    }
    (0, loadArchive_1.writeArchive)((0, printConvertion_1.printConvertion)(traductionArr));
    return (0, printConvertion_1.printConvertion)(traductionArr);
}
