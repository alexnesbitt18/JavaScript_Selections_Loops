console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        continue;
    }
    else{
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        console.log("FIZZ");
    }
    if(i % 5 == 0){
        console.log("BUZZ");
    }
    if(i % 3 == 0 && i % 5 ==0){
        console.log("FIZZBUZZ");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let i = 1;

while(i < 100){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}

let x = 1;

do{
    if(x % 2 !== 0){
        console.log(x);
    }
    x++;
}
while(x < 100);

let f = 1;

while(f < 100){
    if(f % 3 == 0){
        console.log("FIZZ");
    }
    if(f % 5 == 0){
        console.log("BUZZ");
    }
    if(f % 3 == 0 && f % 5 == 0){
        console.log("FIZZBUZZ");
    }
    f++;
}

let b = 1;

do{
    if(f % 3 == 0){
        console.log("FIZZ");
    }
    if(f % 5 == 0){
        console.log("BUZZ");
    }
    if(f % 3 == 0 && f % 5 == 0){
        console.log("FIZZBUZZ");
    }
    f++;
}
while(b < 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for(let i = 1; i <= n; i++){
    if(i = value){
        console.log(`Found value!`);
        break;
    }
}
console.log(`Did not find value!`);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let y = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= y; i++){
    let output = "";

    if(i % fizzDivisor == 0){
        output += "FIZZ";
    }

    if(i % buzzDivisor == o){
        output += "BUZZ";
    }
    
    console.log(`${i} ${output}`);
}