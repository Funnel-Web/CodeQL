export function failMe(input: string): void {
    //Trying to get something to fail here. 

    const loc = null;
    if (dist < 10)
        loc = "here";
    else
        loc = "there";
    console.log(`faileme: ${input} and ${loc}`);
}