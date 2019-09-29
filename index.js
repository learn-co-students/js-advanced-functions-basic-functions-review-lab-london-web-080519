// Your code here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight = "*") {
    return function (adjective = "awesome") {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}

let Calculator = {
        add: (a,b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    
    }

function actionApplyer(integer, array){
 
    array.forEach(ftn => integer = ftn(integer))
    return integer
}