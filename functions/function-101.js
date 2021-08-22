
let greetUser = function() {
    console.log('Welcome User')
}

greetUser()

let square = function(num){
    return num**2
}

console.log(square(3))

//Convert farenheit to celsius

let fahrenheitToCelsius = function(temp) {
    return (temp - 32) * (5 / 9)
}

let temp1 = 32
let temp2 = 68

console.log(fahrenheitToCelsius(temp1))
console.log(fahrenheitToCelsius(temp2))