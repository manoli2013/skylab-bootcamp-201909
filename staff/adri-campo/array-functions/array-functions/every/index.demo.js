console.log('DEMO every');

var array = [1, 30, 39, 29, 20, 10];

function belowFourty(currentValue) {
    return currentValue < 40;
}

console.log("Should return true")
console.log(every(array,belowFourty));


function overThirty(currentValue) {
    return currentValue > 30;
}

console.log("Should return false")
console.log(every(array,overThirty));
