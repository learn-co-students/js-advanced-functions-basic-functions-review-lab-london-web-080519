function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(a = "*") {
    return function (chr = "special") {
        return `You are ${a}${chr}${a}!`
    }
}

let Calculator = {
    add: () => 1+3,
    subtract: () => 1-3,
    multiply: () => 1*3,
    divide: () => 10/5
}

function actionApplyer (integer, array) {
    array.forEach(i => integer = i(integer))
    return integer
}