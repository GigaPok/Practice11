// დავალება1  

let cars = ["audi", "bmw", "lexus", "volkswagen", "ferrary", "porsche"];

let topCars = cars.slice(1, 5)
console.log(topCars);

// დავალება2

let names = ["audi", "bmw", "lexus", "ia", "ferrary", "lia"];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 3) {
        console.log(names[i]);
    }
}

// დავალება3

let numbers = [2, 7, 25, 18, 39, 51, 97, 104];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i] + ' ' + "ლუწია")
    }
    else (console.log(numbers[i] + ' ' + "კენტია" ))
}

// დავალება4

 let user = ["name", "age", 25, 50, "surname", [100, 500] ];
 console.log(user[5][1]);

//  დავალება5 

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };
console.log(person.eyecolor);

// დავალება6

let name = ["audi", "bmw", "lexus", "ia", "ferrary", "lia"];

for (let i = 0; i < name.length; i++) {
        console.log(name[i]);
}

// დავალება7

let numbers2  = [5, 25, 89, 120, 36]
numbers3 = numbers2.push("javascript", "python");
console.log(numbers2);
numbers2.unshift("css", "html");
console.log(numbers2);
console.log(numbers2.length);
numbers2.shift()
numbers2.pop()
console.log(numbers2);

// დავალება8
let fruits = ["fortoxali", "banani", "msxali"];
console.log(fruits.length);
fruits.push("vashli",  "ananasi");
console.log(fruits);
fruits.unshift("sazamrtro");
console.log(fruits);
console.log(fruits.length);
fruits.splice(2,0,"mango");
console.log(fruits);
fruits.shift();
fruits.pop();
console.log(fruits);
console.log(fruits.length);


// დავალება9
let cars2 = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche", "bently"];
for (let i = 2; i <= 5; i++) {
    console.log (cars2[i]);
} 
let car3 = cars2.slice(1,4);
console.log(car3)
// console.log (cars2.slice(1,4));


//დავალება10

let firstname = [ "elene", "tamuna", "giorgi", "beqa", "nika"];

// let raodenoba = firstname.length - 1
// console.log(firstname[raodenoba])

if  (firstname.length == 5 && firstname[4] == "nika")  {
    console.log('მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა')
}

let firstname2 = [ "sandro", "kristina", "kristi",  "krist", "zura", "beqa", "mariami"];
if  (firstname2.length == 7 || firstname2[0] == "sandro")  {
    console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო")
}