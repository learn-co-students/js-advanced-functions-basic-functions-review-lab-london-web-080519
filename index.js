// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(topArg="*") {
    return function(arg="special") {
        return `You are ${topArg}${arg}${topArg}!`
    }
    
}

let Calculator = {
    add: function(a,b) { return a + b },
    subtract: function(a,b) { return a-b },
    multiply: function(a,b) {return a*b },
    divide: function(a,b) { return a/b }
}

function actionApplyer(start, arr) {
    let mode = start
    for (let i=0; i<arr.length; i++) {
        mode = arr[i](mode)
    }
    return mode
}

