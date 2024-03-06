//Part 1

array = [1, 2, 3, 4, 5];

console.log(array[0]);
console.log(array.length);

function newarray() {
  array.push(6);
  newarray = array;
  return newarray;
}
console.log(newarray());

console.log(array.pop());
console.log(array);

//Part 2

friends = ["Jackeline", "Leonardo", "Marco", "Cesar", "Fernando"];

console.log(friends[2]);

newfriends = ["Sivir", "Gekko", "Kaisa"];

Array.prototype.push.apply(friends, newfriends);

console.log(friends);

let result = friends.filter((friends) => friends.length > 7);
console.log(result);

const newArray = friends.map((person, index) => `${person}${index}`);
console.log(newArray);

const sumOfIndices = friends.reduce((acc, _, index) => acc + index, 0);
console.log(sumOfIndices);
