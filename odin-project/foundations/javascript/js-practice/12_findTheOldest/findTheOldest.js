const findTheOldest = function(people) {
    const sorted = people.map(person => {
        if (!person.yearOfDeath) {
            return {
                'name' : person.name,
                'yearOfBirth' : person.yearOfBirth,
                'yearOfDeath' : 2024
            }
        }
        return person
    })
    .sort((a, b) => {
        if(a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
            return -1
        } else if(a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
            return 1
        }
        return 0
    })
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;

console.log(findTheOldest([{
    name: "Carly",
    yearOfBirth: 1842,

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
  }]))