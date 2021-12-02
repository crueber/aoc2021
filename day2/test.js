const fs = require('fs')

const data = fs.readFileSync('./data', 'utf-8').split('\n')

// Part 1:

let depth = 0
let horiz = 0

data.forEach((i) => {
    const [ command, amountStr ] = i.split(' ')
    const amount = parseInt(amountStr)
    switch (command) {
        case 'forward': horiz += amount; break;
        case 'down': depth += amount; break;
        case 'up': depth -= amount; break;
        default: console.log(`command not recognized: ${command}`)
    }
})

console.log(`depth: ${depth}, horizontal: ${horiz}`)
console.log(`Final depth * horiz: ${depth * horiz}`)

// Part 2:

depth = 0
horiz = 0
let aim = 0

data.forEach((i) => {
    const [ command, amountStr ] = i.split(' ')
    const amount = parseInt(amountStr)
    switch (command) {
        case 'forward': horiz += amount; depth += aim * amount; break;
        case 'down': aim += amount; break;
        case 'up': aim -= amount; break;
        default: console.log(`command not recognized: ${command}`)
    }
})

console.log(`depth: ${depth}, horizontal: ${horiz}, aim: ${aim}`)
console.log(`Final depth * horiz: ${depth * horiz}`)
