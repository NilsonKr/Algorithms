function merge(left, right) {
	const output = [];
	let leftIndex = 0;
	let rightIndex = 0;

	//Push firsth the elements who fulfills the condition into output array
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			output.push(left[leftIndex]);
			leftIndex++;
		} else {
			output.push(right[rightIndex]);
			rightIndex++;
		}
	}

	//If there's remaining elements put them at end of the array
	return [...output, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const middle = arr.length / 2;
	const leftArr = arr.slice(0, middle);
	const rightArr = arr.slice(middle);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const SAMPLE_NEGATIVE = [-1, 2, -8, -10];

const SAMPLE = [5, 2, 3, 1];

const sortedArray = mergeSort(SAMPLE);

console.log('Sorted Array');
for (num of sortedArray) {
	console.log(num);
}
