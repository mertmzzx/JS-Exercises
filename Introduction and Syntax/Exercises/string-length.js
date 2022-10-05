function solve(first, second, third) {
    let firstLength = first.length;
    let secondLength = second.length;
    let thirdLength = third.length;

    let sumLength = firstLength + secondLength + thirdLength;
    let result = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(result);
}   