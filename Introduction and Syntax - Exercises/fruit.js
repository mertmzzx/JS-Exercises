function solve(fruit, weight, price) {
    let fruitType = fruit;
    let weightKg = weight / 1000;
    let pricePerKg = price;

    let totalPrice = weightKg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`);
}

solve('orange', 2500, 1.80)