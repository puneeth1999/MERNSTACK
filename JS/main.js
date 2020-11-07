//____________________________________CONSOLE________________________________//

/*
alert('supp world!');
console.log('Hello World!');
console.error('this is an error');
console.warn('this is a warning');
*/





//____________________________________VARIABLES________________________________//

// There are three ways to create variables:
// var, let and const. Ignore var as much as possible since var is global.

let age = 30;
age = 31;
console.log(age);

const score = 30;
// score = 31;        Can't change the value because const is immutable.
console.log(score);





//_____________________________________DATATYPES_______________________________//

//We have String, Numbers, Boolean, null, undefined, boolean
const name = 'John';
const ager = 30;
const rating = 4.5;
const x = null;
const isCool = true;
const y = undefined;
let z; //this is undefined as well

console.log('Type of Name is:\t' + typeof(name)); //string
console.log('Type of ager is:\t' + typeof(ager)); //number
console.log('Type of ager is:\t' + typeof(rating)); //number
console.log('Type of ager is:\t' + typeof(isCool)); //boolean
console.log('Type of ager is:\t' + typeof(x)); //you will get "object" but not "null". This is actually a bogus fault with JS.







//______________________________________STRINGS________________________________//


//concatenation
const n1 = "John";
const a1 = 30;
console.log(n1 + a1); //going to concatenate the string and int

//template strings or template literals
const hello = `My name is ${n1} and I am ${a1}`; //Here, we have to use backticks/grave accents inorder to make it work. Single/Double quotes don't work.
console.log(hello);

//properties and methods
const s = 'Hello world';
console.log(s.length); //length is a property and not a function because it doesn't have () after the word length
console.log(s.toUpperCase()); //this is a method
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(' '));





//_____________________________________ARRAYS__________________________________//

//first way to create an array
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

//another way
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits);
console.log(fruits[2]);

//push method
fruits.push('mangoes');
console.log(fruits);

/*
fruits.pop();
Array.isArray(fruits); //returns true
fruits.indexOf('oranges');
*/





//_______________________________OBJECTLITERALS____________________________//

const person = {
    firstName: 'Jon',
    lastName: 'Snow',
    age: 30,
    hobbies: ['music', 'teaching', 'reading', 'coding'],
    address: {
        street: "Ullipatteda",
        city: "Tirupati",
        state: "Andhra Pradesh"
    }
}
console.log(person.firstName.toUpperCase(), person.lastName.toUpperCase());

console.log('favourite hooby is', person.hobbies[1]);
console.log(person.address.city);
//Pulling from the object literals
const { firstName, lastName, address: { city } } = person;
console.log(firstName);
console.log(city);
person.email = 'john@night\'s watch.com';
console.log(person.email);




//_____________________________ARRAYSOFOBJECTS_______________________________//

const todos = [{
        id: 1,
        text: 'take the trash out',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with the boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: true
    }

];
console.log(todos[2].text);
//converting into JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);





// __________________________________LOOPS____________________________________//

for (let i = 0; i < 10; i++) {
    console.log(`for loop number ${i}`);
}

let i = 0;
while (i <= 10) {
    console.log(`the value of i is ${i}`);
    i++;
}

for (let todo of todos) {
    console.log(todo.id);
}
//forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});
//map
const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);
//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
});
console.log(todoCompleted);
//filter+map
const isCompletedText = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo) {
    return todo.text;
});
console.log(isCompletedText);




//_________________________________CONDITIONALS_____________________________________//

let r = 10;
let r2 = 100;
if (r === 10) {
    console.log(`r is ${r}`);
} else {
    console.log('r is not 10');
}

if (r === 10 && r2 === 100) {
    console.log('yay');
} else {
    console.log('ermmm');
}

//terinary operator
const x1 = 10;
const color = x > 10 ? 'red' : 'yellow';
console.log(color);

//switch case
switch (color) {
    case 'red':
        console.log(`color is ${color}`);
        break;
    case 'blue':
        console.log(`color is ${color}`);
        break;
    default:
        console.log(`color is ${color}`);
}


//_______________________________FUNCTIONS__________________________________//

function addnums(num1, num2) {
    return (num1 + num2);
}
console.log(addnums(2, 3));


//_____________________________ARROWFUNCTIONS_____________________________//

//these arrow functions have advantages when you use "this" keyword.
const addTwoNumbers = (num1, num2) => num1 + num2
console.log(addTwoNumbers(3, 40));


//____________________________OBJECTORIENTEDPROGRAMMING____________________//

//Constructor function
function Person(firstName, lastName, dob, interest) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.interest = interest;
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getInterest = function() {
    return this.interest;
}

//Instantiate objects
const p1 = new Person('Puneeth', 'Choppanati', '3-12-1999', 'Cricket');
console.log(p1.firstName);
console.log(p1.dob);
console.log(p1.getFullName());
console.log(p1.getBirthYear());
console.log(p1.getInterest());

//Syntactic sugar in ES6
class Student {
    constructor(firstName, lastName, dob, interest) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.interest = interest;
    }
    getFullNameOfTheStudent() {
        return `${this.firstName} ${this.lastName}`;
    }
    getDOBY() {
        return this.dob.getFullYear();
    }
}

const s1 = new Student('Punnu', 'Choppanati', '3-12-1999', 'Coding');
console.log(s1.getFullNameOfTheStudent());


//_________________________________DOM____________________//

//single element selectors
console.log(window);
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
console.log(document.querySelectorAll('.item')); //returns a nodelist
console.log(document.getElementsByClassName('item')); //returns a HTML collection

const items = document.querySelectorAll('.item');
items.forEach(function(item) {
    console.log(item);
});

//the same thing above using arrow function
items.forEach((item) => console.log(item));

/*
//removing items after selection
const ul = document.querySelector('.items');
ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hey buddy!";
ul.lastElementChild.innerHTML = '<h1>HELLO!</h1>'
*/

/*
const btn = document.querySelector('.btn');
btn.style.background = 'black';

//eventListener
btn.addEventListener('click', (e) => {
    e.preventDefault(); //to prevent the flash behaviour of the submit button
    console.log('click');
});

//adding stuff to classlist when submit is clicked
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // document.querySelector('form').style.background = 'Gray';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('h1').style.color = 'black';
    //there are several other events other than click such as hover, mouseout etc.
});

*/
const myform = document.querySelector('#my-form');
console.log(myform);
const name2 = document.querySelector('#name');
console.log(name2.value);
const email = document.querySelector('#email');
console.log(email.value);
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onsubmit);


function onsubmit(e) {
    e.preventDefault();

    if (name2.value === '' || email.value === '') {
        // alert('Please fill in both the fields');
        message.classList.add('error');
        message.innerHTML = "Please enter all the fields"
        setTimeout(() => message.remove(), 3000);
    } else {
        console.log('success');
        const newUser = document.createElement('li');
        newUser.appendChild(document.createTextNode(`${name2.value}: ${email.value}`))
        userList.appendChild(newUser);

        //clearing the fields
        name2.value = '';
        email.value = '';
    }
}