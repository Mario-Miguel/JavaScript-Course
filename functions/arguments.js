let add = function(a, b){
    return a + b
}

let result = add(10, 1)
console.log(result)

//Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge area
// A 25% tip on $40 would be $10
let getTip = function(total, tipPercent = .2) {
    return `A ${tipPercent*100}% on $${total} would be $${total*tipPercent}`
    
}

let tip = getTip(100, .25)
console.log(tip)


let name = 'Jen'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old.`)