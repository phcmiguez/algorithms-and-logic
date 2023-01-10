//Hackerrank problem - A Very Big Sum

const arr = [
  1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461,
  1002575010, 1007514041, 1007548981, 1004402249,
];
let count = 0;

const arrSum = function (array) {
  const arrLen = array.length;

  for (i = 0; i < arrLen; i++) {
    const arrItem = parseInt(array[i]);
    count += arrItem;
  }

  return count;
};

console.log(arrSum(arr));
