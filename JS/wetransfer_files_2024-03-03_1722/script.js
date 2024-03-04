let students = [
    { "First Name": 'John', age: 25, city: 'New York' },
    { "First Name": 'Jane', age: 22, city: 'San Francisco' },
    { "First Name": 'Jim', age: 30, city: 'Chicago' }
];

// John's age is 25 & he lives in New York

students.forEach(function(item) {
    console.log(`${item["First Name"]}'s age is ${item.age} & he lives in ${item.city}`);
})


