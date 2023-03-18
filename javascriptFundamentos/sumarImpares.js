const sumOdd = (oddLimitNumber) => {
    let sum = 0;
    let oddCounter = 0;
    let number = 1;

    while (oddCounter < oddLimitNumber) {
        if ((number % 2) != 0) {
            sum += number;
            oddCounter++;
        }
        number++;
    }

    return sum;
}