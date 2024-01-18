console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i = 1; i <= count; i++){
        if (i % 2 != 0){
            console.log(`${i} is an odd number.`)
        }else console.log(`${i} is an even number.`)
       }
    }
                


printOdds(12);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `"Congrats ${userName}, you can drive!"`
    let belowSixteen = `"Sorry ${userName}, but you need to wait until you're 16."`

    if (age >= 16){
        console.log(aboveSixteen);
    }else console.log(belowSixteen);
}

checkAge("Sebastian", 17);
checkAge("Joey", 14);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
//use switch case ?
function coordinatesCP(x, y){
    if (x == 0){
        console.log(`The point ${x},${y} lies on the x axis.`);
    }else if (y == 0){
        console.log(`The point ${x},${y} lies on the y axis`);
    }else if (x >= 1 && y >= 1){
        console.log(`The point ${x},${y} is in Quadrant 1.`);
    }else if (x <= 0 && y >= 1){
        console.log(`The point ${x},${y} is in Quadrant 2.`);
    }else if (x <= 0 && y <= 0){
        console.log(`The point ${x},${y} is in Quadrant 3.`);
    }else if (x >= 0 && y <= 0){
        console.log(`The point ${x},${y} is in Quadrant 4.`);
    }
}

coordinatesCP(0, 22);
coordinatesCP(5, 0);
coordinatesCP(5, 25);
coordinatesCP(-3, 3);
coordinatesCP(-12, -4);
coordinatesCP(8, -1);