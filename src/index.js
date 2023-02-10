module.exports = function toReadable (number) {
// function toReadable (number) {
const numToStr = String(number);
const first = numToStr[0];
const second = numToStr[1];
const third = numToStr[2];
const extraordinary = function (a, b) {
	switch (a + b) {
		case '10':
			return 'ten';
			break;
		case '11':
			return 'eleven';
			break;
		case '12':
			return 'twelve';
			break;
		case '13':
			return 'thirteen';
			break;
		case '15':
			return 'fifteen';
			break;
		default:
			break;
	}
};
let result = ``;
const lastDigit = function (a) {
	switch (+a){
		case 1: 
			return 'one';
			break;
		case 2: 
			return 'two';
			break;
		case 3: 
			return 'three';
			break;
		case 4: 
			return 'four';
			break;
		case 5: 
			return 'five';
			break;
		case 6: 
			return 'six';
			break;
		case 7: 
			return 'seven';
			break;
		case 8: 
			return 'eight';
			break;
		case 9: 
			return 'nine';
			break;
		default: 
			break;
	}
};
const decimal = function (a) {
	switch (+a) {
		case 2:
			return 'twenty';
			break;
		case 3:
			return 'thirty';
			break;
		case 4:
			return 'forty';
			break;
		case 5:
			return 'fifty';
			break;
		case 6:
			return 'sixty';
			break;
		case 7:
			return 'seventy';
			break;
		case 8:
			return 'eighty';
			break;
		case 9:
			return 'ninety';
			break;
		default:
			break;
	}
}
	
if (numToStr == 0) {
	return 'zero';

} else if (numToStr.length < 2) {
	return lastDigit(first);
	
} else if (numToStr.length > 2) {
	if (second == 0 && third != 0) {
		result = `${lastDigit(first)} hundred ${lastDigit(third)}`;

	} else if (second == 0 && third == 0) {
		result = `${lastDigit(first)} hundred`;

	} else if (second > 1 && third == 0) {
		result = `${lastDigit(first)} hundred ${decimal(second)}`;

	} else if (second > 1) {
		result = `${lastDigit(first)} hundred ${decimal(second)} ${lastDigit(third)}`

	} else {
		if (third > 3 && third != 5) {
			result = `${lastDigit(first)} hundred ${lastDigit(third)}teen`;

		} else {
			result = `${lastDigit(first)} hundred ${extraordinary(second, third)}`;

		}
		// return result;	
	}
	
} else {
	if (first + second > 19 && second  != 0) {
		result = `${decimal(first)} ${lastDigit(second)}`;

	} else if (first + second >= 20 && second == 0) {
		result = `${decimal(first)}`;

	} else if (first + second < 20 && (second > 3 && second != 5)) {
		result = `${lastDigit(second)}teen`;

	} else {
		result = `${extraordinary(first, second)}`;
	}
}

const doubleT = result.split('').reverse();
const index = doubleT.indexOf('t');
let conclude;

if (doubleT[index] === doubleT[index+1]) {
	conclude = doubleT.splice(index, 1);
	result = doubleT.reverse().join('');
}
// console.log(doubleT);
return result;
}



// console.log(toReadable(818));
