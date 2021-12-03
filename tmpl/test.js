const fs = require('fs')
const data = fs.readFileSync('./data', 'utf-8').split('\n')

const section = (name, data, fn) => {
    console.log(`**************************** ${name} ****************************`)
    fn([...data])
    console.log(`**************************** End of ${name} ****************************`)
}

section('Part 1', data, (data) => {

})

section('Part 2', data, (data) => {

})
