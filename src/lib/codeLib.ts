export function failMe(input: string): void {
    //Trying to get something to fail here. 
    let addition;
    switch (input) {
        case 'input1':
            addition = 'another thing';
        case 'input2':
            addition = 'something else';
        case 'input3':
            addition = 'one more thing';
    }
    if (addition) {
        console.log(`faileme: ${input} with the ${addition}`);
    } else {
        console.log(`faileme: ${input} with the ${addition}`);
    }
}

export function convertBytes(input: number): string {
    const units = ['byte', 'bytes', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
    let l = 0, n = input;
    if (input != 1) {
        ++l;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
    }
    return `${n.toFixed(1).replace('.0', '')} ${units[l]}`;
}