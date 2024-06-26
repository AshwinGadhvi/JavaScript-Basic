for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Number : ${i} is fizz & buzz`);
        } else {
            console.log(`Number : ${i} is Fizz`);
        }
    }
    if (i % 5 === 0) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Number : ${i} is fizz & buzz`);
        } else {
            console.log(`Number : ${i} is buzz`);
        }
    } else {
        console.log(`Number : ${i}`);
    }
}
