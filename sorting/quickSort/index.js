function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[0];
	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > pivot) {
			right.push(arr[i]);
		}

		if (arr[i] < pivot) {
			left.push(arr[i]);
		}
	}

	console.log([].concat(left, pivot, right));

	return [].concat(quickSort(left), pivot, quickSort(right));
}

const SAMPLE = [-1, 2, -8, -10];

const sortedArray = quickSort(SAMPLE);

console.log('Sorted Array');
for (num of sortedArray) {
	console.log(num);
}
