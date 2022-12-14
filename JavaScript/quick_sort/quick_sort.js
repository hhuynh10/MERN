var items = [1,5,3,7,6,8,12,2,9];
const swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
const partition = (items, left, right)  => {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left;
        j       = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = (items, left, right) => {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);