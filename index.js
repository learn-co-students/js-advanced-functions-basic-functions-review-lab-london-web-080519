// Your code here

function saturdayFun(activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
	return `This Monday, I will ${activity}.`;
};

function wrapAdjective(visual = "*") {
	return function(adjective = "special") {
		return `You are ${visual}${adjective}${visual}!`;
	};
}

let Calculator = {
	add: function(first, second) {
		return first + second;
	},
	subtract: function(first, second) {
		return first - second;
	},
	multiply: function(first, second) {
		return first * second;
	},
	divide: function(first, second) {
		return first / second;
	},
};

function actionApplyer(starting, array) {
	if (array.length == 0) {
		return starting;
	} else {
		let result = starting;
		array.forEach(item => {
			result = item(result);
		});
		return result;
	}
}
