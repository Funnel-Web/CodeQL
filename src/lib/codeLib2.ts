export function failMe(input: string): void {
    //Trying to get something to fail here. 

    let something = 'hello'

    let loc = null;
    if (input === '10')
        loc = "here";
    else
        loc = "there";
    console.log(`faileme: ${input} and ${loc} and ${something}`);
}