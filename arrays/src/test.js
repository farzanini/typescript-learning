function removeDuplicates(items) {
  let tempArray = [];

  items.map((item) => {
    !tempArray.includes(item) && tempArray.push(item);
  });
  console.log(tempArray);
}

console.log(removeDuplicates(["foo", "bar", "bar"]));
console.log(removeDuplicates(["a", "a", "a", "b", "b"]));
console.log(removeDuplicates(["a", "b", "a", "a", "c", "b"]));
