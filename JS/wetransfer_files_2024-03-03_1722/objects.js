// json array of students with their name, age, city & marks in 5 subjects

const students = [
    {
        name: "John",
        age: 20,
        city: "New York",
        marks: [80, 85, 90, 75, 95]
    },
    {
        name: "Alice",
        age: 22,
        city: "London",
        marks: [70, 75, 80, 85, 90]
    },
    {
        name: "Bob",
        age: 21,
        city: "Paris",
        marks: [90, 85, 80, 75, 70]
    }
];

// John's age is 20 & his total marks are 425

students.forEach(function(item){
    let sum = 0;
    item.marks.forEach(function(i){
        sum = sum+i;
    })
    console.log(`${item.name} age is ${item.age} & his marks are ${sum}`);
})