import fs from 'fs';
import path from 'path';

export function readArchive(archive: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(archive, 'utf-8', (error, data) => {
            if (error) {
                console.error("Error reading file:", error);
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

export function writeArchive(conversion: any) {
    const filePath = path.resolve(__dirname, '../doc-parsed/archiveConvert.txt');
    fs.writeFile(filePath, conversion, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Arquivo salvo com sucesso!');
        }
    });
}