const classrooms = [
    {
        name: "Class 11th",
        students: [
            {
                name: "Rahul",
                age: 15,
                marks: [80, 85, 90, 75, 95]
            },
            {
                name: "Priya",
                age: 16,
                marks: [90, 92, 88, 95, 87]
            }
        ]
    },
    {
        name: "Class 12th",
        students: [
            {
                name: "Amit",
                age: 14,
                marks: [70, 75, 80, 65, 72]
            },
            {
                name: "Sneha",
                age: 15,
                marks: [85, 90, 92, 88, 90]
            },
            {
                name: "Lalit",
                age: 16,
                marks: [90, 95, 92, 88, 92]
            }
        ]
    }
];


// output:
// Class 11th has 2 students:
// 1. Rahul, age 15
// 2. Priya, age 16
// Rahul's percentage is: ___
// Priya's percentage is: ___

classrooms.forEach(function(item){
    
    console.log(`${item.name} has ${item.students.length} students:`)
    item.students.forEach(function(n,i){
        console.log(`${i+1}. ${n.name}, age ${n.age}`)
        let totalMarks =0;
        let totalSub= n.marks.length;
        n.marks.forEach(function(mark){
            totalMarks= totalMarks + mark;
        })
        console.log(`${n.name}'s percentage is: ${totalMarks / totalSub}`);
        
    })
})
