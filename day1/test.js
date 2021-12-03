const { data } = require('./data.json')

// Part 1

let total = 0
data.reduce((prev, curr) => {
    if (prev && curr > prev) total++
    return curr
}, 0)

console.log(`Total entries: ${data.length}`)
console.log(`Incrementing entries: ${total}`)

// Part 2

let bonus_total = 0
let last_sum = null
data.forEach((v, idx) => {
    if (idx < 2) return
    current_sum = data[idx] + data[idx-1] + data[idx-2]

    if (last_sum === null) {
        return last_sum = current_sum
    } else {
        if (current_sum > last_sum) bonus_total++
    }
    last_sum = current_sum
})

console.log(`Incrementing 3 sum entries: ${bonus_total}`)
