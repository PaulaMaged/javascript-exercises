const sumAll = function(limit1, limit2) {
    for(const input of arguments) 
        if(typeof input !== 'number') return 'ERROR';

    const start = Math.min(...arguments);

    if(start < 0) return 'ERROR';

    const end = Math.max(...arguments);
    let sum = 0;

    for(let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
