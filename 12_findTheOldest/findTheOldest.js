const findTheOldest = function(people) {
    return people.reduce((person, oldest) => {
        let personAliveTill;
        if('yearOfDeath' in person)
            personAliveTill = person.yearOfDeath;
        else 
            personAliveTill = new Date().getFullYear();
        let oldestAliveTill;
        if('yearOfDeath' in oldest)
            oldestAliveTill = oldest.yearOfDeath;
        else 
            oldestAliveTill = new Date().getFullYear();
        yearsAlivePerson = personAliveTill - person.yearOfBirth;
        yearAliveOldest = oldestAliveTill - oldest.yearOfBirth;
        return yearsAlivePerson > yearAliveOldest? person: oldest;  
    })
}

    const people = [
        {
          name: "Carly",
          yearOfBirth: 2018,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },];

console.log(findTheOldest(people));


// Do not edit below this line
module.exports = findTheOldest;
