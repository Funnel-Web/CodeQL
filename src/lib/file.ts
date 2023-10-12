import fs from 'fs-extra';

export async function writeFile(contents: string) {
    // TODO: do something better here
    const username = 'user@name.com';
    const password = 'abs&1234';
    const body = `
    UN: ${username}
    PW: ${password}
    COMTETS:
    ${contents}
    `
    await fs.writeFile('a-file.txt', body);
}