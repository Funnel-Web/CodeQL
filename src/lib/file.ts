import fs from 'fs-extra';

export async function writeFile(contents: string) {
    // TODO: do something better here
    await fs.writeFile('a-file.txt', contents);
}