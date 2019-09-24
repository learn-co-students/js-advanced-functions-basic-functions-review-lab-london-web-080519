// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
    return function(adj="special") {
        return `You are ${visualFlair}${adj}${visualFlair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(n1, n2) {
        return n1 - n2
    },
    multiply: (n1, n2) => n1*n2,
    divide: (n1, n2) => n1/n2,
}

function actionApplyer(integer, functionsArray) {
    functionsArray.forEach(fn => integer = fn(integer))
    return integer
}