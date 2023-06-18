//Handle all the console.log and error parts
const info = (...params) => {
    console.log(...params)
}
const error = (...params) => {
    console.error(...params)
}

module.exports ={
    info,
    error
}