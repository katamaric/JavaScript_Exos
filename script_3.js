let floors = prompt("Hi, welcome to my super pyramid ! How many levels would you like ?")
let pyramid = "";

for (let i = 1; i <= floors; i++) {
  let row = "";

  // Add spaces
  for (let j = 1; j <= floors - i; j++) {
    row += " ";
  }

  // Add hashes
  for (let k = 1; k <= i; k++) {
    row += "#";
  }

  pyramid += row + "\n";
}

console.log(pyramid); 