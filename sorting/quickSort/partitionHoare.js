function swap(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function quickSort(array, left = 0, right = array.length - 1) {
	if (array.length < 2) {
		return array;
	}

	const pivot = partitionHoare(array, left, right);

	if (left < pivot - 1) {
		quickSort(array, left, pivot - 1);
	}

	if (right > pivot) {
		quickSort(array, pivot, right);
	}

	return array;
}

function partitionHoare(array, left, right) {
	var pivot = Math.floor((left + right) / 2);

	while (left < right) {
		while (array[left] < array[pivot]) {
			left++;
		}
		while (array[right] > array[pivot]) {
			right--;
		}

		if (left <= right) {
			swap(array, left, right);
			left++;
			right--;
		}
	}
	return left;
}

const SAMPLE = [-1, 2, -8, -10];

const sortedArray = quickSort(SAMPLE);

console.log('Sorted Array');
for (num of sortedArray) {
	console.log(num);
}
