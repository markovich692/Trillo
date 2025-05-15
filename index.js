// Description:
// Given an array (arr) as an argument complete the
// function countSmileys that should return the total
//  number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair
// of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does
// not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth
// that should be marked with either ) or D
// No additional characters are allowed except
// for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

function countSmileys(arr) {
  let count = 0;

  arr.forEach((el) => {
    const elSplit = el.split("");

    const correct =
      (elSplit.length === 3 &&
        (elSplit[0] === ":" || elSplit[0] === ";") &&
        (elSplit[1] === "-" || elSplit[1] === "~" || elSplit[1] === "") &&
        (elSplit[2] === ")" || elSplit[2] === "D")) ||
      (elSplit.length === 2 &&
        (elSplit[0] === ":" || elSplit[0] === ";") &&
        (elSplit[1] === ")" || elSplit[1] === "D"));

    console.log(correct);
    if (!correct) return;

    count++;
  });

  console.log(count);
}

countSmileys([":D", ":~)", ";~D", ":)"]);
