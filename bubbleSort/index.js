function bubbleSort(arr) {
	const newArray = [...arr];

	for (let i = 0; i < newArray.length; i++) {
		for (let j = 0; j < newArray.length - i - 1; j++) {
			//pull the high number to the end of the array
			if (newArray[j] > newArray[j + 1]) {
				let major = newArray[j];
				//Swap the higher/lesser number to the next position
				newArray[j] = newArray[j + 1];
				newArray[j + 1] = major;
			}
		}
	}

	return newArray;
}

const SAMPLE = [2000, 4, 69, 10, 434, 1000, 23, 1];

const sortedArray = bubbleSort(SAMPLE);

console.log('Sorted Array');
for (num of sortedArray) {
	console.log(num);
}
