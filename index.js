// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

const findNeedle = function (arr) {
  const needlePosition = arr.findIndex((el) => {
    return el === "needle";
  });

  if (!needlePosition) return;

  return `found the needle at position ${needlePosition}`;
};

const testing = findNeedle([
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
]);

console.log(testing);
