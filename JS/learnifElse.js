// if(false){
//     console.log('I am inside if Block')
// }
// else if(true) {
//     console.log('I am inside elseif block')
// }
// else {
//     console.log('Notice this part')
// }

var WhoisHere = 'abcd';
if (WhoisHere === 'user'){
    console.log('Greeting message for user')
    console.log('Allow access to view all courses.')
}else if (WhoisHere === 'teacher'){
    console.log('Greeting message for Teacher')
    console.log('Allow access to his courses.')
}else{
    console.log('Message: please verify your email')
    console.log('Send user an email for verification.')
}
