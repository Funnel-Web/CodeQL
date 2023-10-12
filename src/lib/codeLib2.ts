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