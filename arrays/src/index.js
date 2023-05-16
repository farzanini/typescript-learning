var searchIndex = function (array, value) {
    return array.indexOf(value);
};
var numbers = [10, 20, 30, 40, 40, 50, 50, 60];
console.log(searchIndex(numbers, 50));
console.log(searchIndex(numbers, 30));
console.log(searchIndex(numbers, 70));
console.log(searchIndex([5, 10, 10, 20, 30], 20));
