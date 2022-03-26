const divide = (parameter1, parameter2) => {
    debugger
    let sum = parameter1 / parameter2
    console.log(sum)
    return sum //returns NaN error despite code returning correct value when using node index.js
}

divide(2000, 100)

//rembertobeltran@Remys-MacBook-Pro phase-1-arrow-functions % node index.js
//20


const add = (parameter1, parameter2) => {
    return parameter1 + parameter2
}

add(2,4)

const square = (parameter1) => {
    return parameter1 * parameter1
}

square(2)