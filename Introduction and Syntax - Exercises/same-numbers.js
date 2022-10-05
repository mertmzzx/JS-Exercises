function solve(input) {
    let inputNumber = input.toString();
    let isSame = true;
    let sumOfDigits = 0;

    let digit = inputNumber[0];
    let inputLength = inputNumber.length;
    for (let i = 0; i < inputLength; i++) {
        sumOfDigits += Number(inputNumber[i]);

        if (inputNumber[i] !== digit) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sumOfDigits);
}

solve(1234)