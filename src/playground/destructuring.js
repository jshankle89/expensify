//Object Desctructuring

// const person = {
//     name: 'Justin',
//     age: 29,
//     location: {
//         city: 'Indy',
//         temp: 61
//     }
// };

// const {name: firstName = 'anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;
// console.log(publisherName)

// ARRAY DESCTRUCTURING

// const address = ['1299 S Juniper Street', 'Philidelphia', 'Pennsylvania', '19147'];
// //Leave comma if you dont need the first variable
// const [ , city, state = 'New York'] = address;
// console.log(`You are in ${city}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [saleItem, , mediumCost] = item;
console.log(`A medium ${saleItem} costs ${mediumCost}`);