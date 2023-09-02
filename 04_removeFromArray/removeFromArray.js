const removeFromArray = function(array, ...filterOut) {
    for(const filterItem of filterOut) {
        index = array.indexOf(filterItem);
        while(index > -1) {
            array.splice(index, 1);
            index = array.indexOf(filterItem);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
