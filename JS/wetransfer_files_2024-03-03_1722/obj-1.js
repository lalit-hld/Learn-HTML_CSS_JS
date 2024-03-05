let object = {
                "products": [
            
                     {"name": "Product1", "price": 10, "quantity": 5, "category": "Category1"},
                     {"name": "Product2", "price": 20, "quantity": 3, "category": "Category2"},
                     {"name": "Product3", "price": 15, "quantity": 2, "category": "Category1"},
                     {"name": "Product4", "price": 25, "quantity": 4, "category": "Category2"},
                     {"name": "Product5", "price": 30, "quantity": 1, "category": "Category1"}
                ]
            }

[
    { title: "Task 1", completed: false },
]


// Have to find the total no. of products.
// Average price of the products.
// Enter  category to find total quantity.
// print the total quantity of the given category.

console.log(`Total nuumber of products are ${object.products.length}`)
let price = 0
object.products.forEach(function(item){
    price = price + item.price
})
let Average = price / object.products.length;
console.log(`The Average price of the products is: ${Average}`)
// prompt("Enter a category to find total quantity:"?category())

let category = function(input){
    let totalQuantity= 0;
    object.products.forEach(function(i){
        if(i.category===input){
            totalQuantity = totalQuantity + i.quantity;
        }
    })
    console.log(`The total Quantity of ${input} is: ${totalQuantity}.`)
}

category("Category1");