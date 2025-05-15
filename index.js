// Description:
// This time no story, no theory. The examples
// below show you how to write function accum:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes
// only letters from a..z and A..Z.

function accum(s) {
  // your code

  const upperCase = s
    .split("")
    .map((el, i) => {
      return el.toUpperCase();
    })
    .map((el, i) => {
      return el + el.toLowerCase().repeat(i);
    })
    .join("-");

  console.log(upperCase);
}

accum("abcd");
