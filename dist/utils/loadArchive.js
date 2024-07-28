"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readArchive = readArchive;
exports.writeArchive = writeArchive;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function readArchive(archive) {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(archive, 'utf-8', (error, data) => {
            if (error) {
                console.error("Error reading file:", error);
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
}
function writeArchive(conversion) {
    const filePath = path_1.default.resolve(__dirname, '../doc-parsed/archiveConvert.txt');
    fs_1.default.writeFile(filePath, conversion, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Arquivo salvo com sucesso!');
        }
    });
}
