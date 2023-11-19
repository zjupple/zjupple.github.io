// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);

// program to remove duplicates from array of obejects

let members = [{
    1: "happy",
    2:"sad",
    3: "tiocked",
    4:"higk",
    5: "h",
    6:"friendly",
    2:"sad",
    3: "tiocked",
    4:"higk"
}]


const unique = [...new Map(members.map((m) => [m.id, m])).values()];
console.log(unique);

// Iterating ovr objects in javascript
//JavaScript Tutorial



//## for...in loop with hasOwnProperty method
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};

for (let key in person) {
    if(person.hasOwnProperty(key)){
        console.log(`${key} amd ${person[key]}`)
    }
}

function count(n=1) {
    if(n > 3) return;
    console.log(n);
    count(n + 1);
}

console.log(count())

count()
count()

