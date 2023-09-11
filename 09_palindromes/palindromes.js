const palindromes = function (string) {
    const puncArray = ['!', ',', ' ', '.', "'", '"','?'];
    const lowerCaseStringArray = string.toLowerCase().split('');
    const punctFilter = lowerCaseStringArray.filter(element => !puncArray.includes(element));
    const reverseString = [...punctFilter].reverse();
    return punctFilter.join() === reverseString.join();
};

// console.log(palindromes('rac,?!""!?,car'));
// Do not edit below this line
module.exports = palindromes;
