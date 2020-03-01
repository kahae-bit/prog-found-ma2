//question 1

var petArray = ["cat", "cow", "dog"];

//question 2

console.log(petArray.cow);

//question 3

petArray.push("sheep");

//question 4

console.log(petArray.length);

//question 5

var catObject = {
    name: "Pusur",
    color: "Orange",
    age: 40
};

//question 6

console.log(catObject.age)

//question 7

var catArray = {
    name: "Pusur",
    color: "Orange",
    age: 40
};

//question 8

for(var i = 0; i < catArray.length; i++) {
    var name = catArray[i].name;
    console.log(name);
    console.log(color);
    console.log(age)
}

//question 9

function logToConsole (sayMyName) {
    console.log(sayMyName)
}

//question 10

function logToConsole (sayMyName) {
    console.log("donkey")
}

logToConsole();
