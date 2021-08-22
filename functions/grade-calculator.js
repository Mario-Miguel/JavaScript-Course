// student score, total possible score
// 15/20 -> You got a C(75%)!

let gradeCalculator = function(studentScore, totalPossibleScore){
    let percentage = (studentScore/totalPossibleScore) * 100
    let letterMark =''
    
    if(percentage >= 90){
        letterMark = 'A'
    }
    else if(percentage >= 80){
        letterMark = 'B'
    }
    else if(percentage >= 70){
        letterMark = 'C'
    }
    else if(percentage >= 60 ){
        letterMark = 'D'
    }
    else{
        letterMark = 'F'
    }

    return `You got a ${letterMark}(${percentage}%)`
}

console.log(gradeCalculator(90, 100))