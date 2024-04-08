function findSecondLargestElement(arr) {
    if (arr.length < 2) {
        return undefined;
    }

    arr.sort((a, b) => b - a);

    let secondLargestIndex = 1;

    return arr[secondLargestIndex];
}

const array = [5, 8, 0, 3];
const secondLargestElement = findSecondLargestElement(array);
if (secondLargestElement !== undefined) {
    console.log("The second largest element in the array is:", secondLargestElement);
} else {
    console.log("There is no second largest element in the array.");
}
