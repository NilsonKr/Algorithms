function selectionSort(array) {
	const arr = [...array];

	for (let i = 0; i < arr.length; i++) {
		//Find minimun number index in array and save the reference
		let refIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[refIndex]) {
				refIndex = j;
			}
		}

		let valueRef = arr[refIndex];
		//Swap Positions and set the minimun at the beginning
		arr[refIndex] = arr[i];
		arr[i] = valueRef;

		console.log(arr);
	}

	return arr;
}

const SAMPLE = [2000, 4, 69, 10, 434, 1000, 23, 1];

const sortedArray = selectionSort(SAMPLE);

console.log('Sorted Array:');
for (num of sortedArray) {
	console.log(num);
}
