const fs = require('fs')
const data = fs.readFileSync('./data', 'utf-8').split('\n')

console.log('**************************** Part 1 ****************************')

const ones = Array(data[0].length).fill(0)

data.forEach((v) => {
    v.split('').forEach((i, idx) => {
        if (i === '1') ones[idx] += 1
    })
})

const dataMedian = data.length / 2
const gammaBin = ones.map((amt) => amt > dataMedian ? '1' : '0').join('')
const gamma = parseInt(gammaBin, 2)
const epsilonBin = ones.map((amt) => amt < dataMedian ? '1' : '0').join('')
const epsilon = parseInt(epsilonBin, 2)

console.log(`Number of 1 bits: ${ones}\n`)
console.log(`Gamma: ${gamma} (${gammaBin})\nEpsilon: ${epsilon} (${epsilonBin})\n`)
console.log(`Power consumption: ${gamma * epsilon}`)


console.log('**************************** Part 2 ****************************')

const zeroesAndOnesAtIdx = (ary, idx) => {
    const ones = ary.reduce((ones, curr) => { return curr[idx] === '1' ? ones + 1 : ones }, 0)
    return [ ary.length - ones, ones ]
}

const mostCommonBitAtIdx = (ary, idx) => {
    const [zeroes, ones] = zeroesAndOnesAtIdx(ary, idx)
    return ones >= zeroes ? '1' : (ones === zeroes ? '1' : '0')
}
const leastCommonBitAtIdx = (ary, idx) => {
    const [zeroes, ones] = zeroesAndOnesAtIdx(ary, idx)
    return ones > zeroes ? '0' : (ones === zeroes ? '0' : '1')
}

const narrowByIndex = (ary, fn, idx = 0) => {
    if (ary.length === 1 || ary[0][idx] === undefined) return ary

    const bit_filter = fn(ary, idx)
    const next_ary = ary.filter((i) => i[idx] === bit_filter)
    return narrowByIndex(next_ary, fn, idx + 1)
}

const oxygenRatingBin = narrowByIndex(data, mostCommonBitAtIdx)
const oxygenRating = parseInt(oxygenRatingBin, 2)
const CO2RatingBin = narrowByIndex(data, leastCommonBitAtIdx)
const CO2Rating = parseInt(CO2RatingBin, 2)

console.log(`Oxygen Gen Rating: ${oxygenRating} (${oxygenRatingBin})`)
console.log(`CO2 Scrubber Rating: ${CO2Rating} (${CO2RatingBin})\n`)
console.log(`Life Support Rating: ${oxygenRating * CO2Rating}`)

console.log('**************************** Fin ****************************')
