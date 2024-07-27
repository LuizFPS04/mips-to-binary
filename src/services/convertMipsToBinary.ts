import { readArchive } from "../utils/loadArchive";
import { instructions, registers } from "../utils/mipsMock";

const ARCHIVE_1 = "./src/docs/programa1.txt";
const ARCHIVE_2 = "./src/docs/programa2.txt";
const ARCHIVE_3 = "./src/docs/programa3.txt";



export async function convertFileOne() {
    const file = await readArchive(ARCHIVE_1);
    console.log(file);

    const commandLine = file.split("\r\n");
    console.log(commandLine)

    for (let item of commandLine) {
        const items = item.split(" ");

        for (let f of items) {
            console.log(f)
            let instructionFound = instructions[f]
            console.log(instructionFound)
        }
    }
}
