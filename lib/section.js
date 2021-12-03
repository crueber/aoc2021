
let first = true
module.exports = (name, data, fn) => {
    console.log(`${ first ? '' : '\n'}**************************** ${name} ***********************************`)
    fn([...data])
    console.log(`**************************** End of ${name} ****************************`)
    first = false
}
