import fs from 'fs';

export function readArchive(archive: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(archive, 'utf-8', (error, data) => {
            if (error) {
                console.error("Error reading file:", error);
                reject(error);
            } else {
                console.log("File read successfully");
                resolve(data);
            }
        });
    });
}
