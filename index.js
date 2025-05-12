// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of
// this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    let addNum = i === 0 ? n * n - (n - 1) : arr[i - 1] + 2;

    arr.push(addNum);
  }

  return arr.reduce((acc, num) => acc + num, 0);
}

const result = rowSumOddNumbers(2);
