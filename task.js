let arr = [1, 2, 3];
let results = [];

function combi(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      results.push(`${array[i]} ${array[j]}`);
    }
  }
  return results;
}
console.log(combi(arr));
