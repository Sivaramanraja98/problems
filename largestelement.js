function findLargestElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const array = [220,330,420];
const largestElement = findLargestElement(array);
console.log("The largest element in the array is:", largestElement);
