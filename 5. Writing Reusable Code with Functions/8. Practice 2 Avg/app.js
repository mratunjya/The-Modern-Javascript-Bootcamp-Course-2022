// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2


// Write a function to find the average value in an array of numbers
function avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(avg(arr));