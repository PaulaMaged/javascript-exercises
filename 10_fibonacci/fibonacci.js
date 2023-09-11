const fibonacci = function(n) {
    if(n == 1)
        return 1;
    else if(n < 1)
        return "OOPS";
    const fibSeries = [1,1];
    let counter = 0;
    let result;
    while(fibSeries.length != n) {
        const [num1, num2] = fibSeries.slice(counter, fibSeries.length);
        result = num1 + num2;
        fibSeries.push(result);
        counter++;
    }
    return fibSeries[fibSeries.length - 1];
};

console.log(fibonacci(0));
// Do not edit below this line
module.exports = fibonacci;
