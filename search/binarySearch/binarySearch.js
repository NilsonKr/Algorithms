const readline = require('readline');

let counter = 0;

const binarySearch = (arr, target, start, end) => {
	if (start > end) {
		return false;
	}

	counter++;

	const middleIdx = Math.floor((start + end) / 2);

	if (arr[middleIdx] === target) {
		return true;
	} else if (arr[middleIdx] < target) {
		return binarySearch(arr, target, middleIdx + 1, end);
	} else {
		return binarySearch(arr, target, start, middleIdx - 1);
	}
};

const genRandomArray = size => {
	//Generate dynamically an sorted array
	const arr = new Array(size).fill(0);

	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i - 1] + 1;
	}

	return arr;
};

//Command Line Interface
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('What size will be the Array? : ', size => {
	rl.question('What element would you want to search ? : ', targetAns => {
		const arr = [-1, 0, 3, 5, 9, 12];
		// genRandomArray(Number(size));

		const search = binarySearch(arr, Number(targetAns), 0, arr.length);

		console.log(arr);

		console.log(
			search
				? `The element ${targetAns} is in the list`
				: `The element ${targetAns} is not in the list`
		);

		console.log('The algorithm run totally : ' + counter + ' times');

		process.exit(1);
	});
});
