const mergeSortPractice = arr => {
	if (arr.length < 2) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, middle);
	const rightArr = arr.slice(middle);

	return merge(mergeSortPractice(leftArr), mergeSortPractice(rightArr));
};

function merge(leftArr, rightArr) {
	const output = [];
	let leftIdx = 0;
	let rightIdx = 0;

	while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
		if (leftArr[leftIdx] < rightArr[rightIdx]) {
			output.push(leftArr[leftIdx]);
			leftIdx++;
		} else {
			output.push(rightArr[rightIdx]);
			rightIdx++;
		}
	}

	return output.concat(leftArr.slice(leftIdx), rightArr.slice(rightIdx));
}

const SAMPLE_NEGATIVE = [-1, 2, -8, -10];

const SAMPLE = [
	5, 2, 3, 1, 1, 1, 1, 2, 3, 4, 553, 3, 35, 5, 466, 5, 4, 5, 34, 2, 3, 234, 34,
];

const sortedArray = mergeSortPractice(SAMPLE_NEGATIVE);

console.log('Sorted Array');
for (num of sortedArray) {
	console.log(num);
}
