// Description:
// Given a time in a time format class, return
//  it without year, month and day.

// It should return a string including milliseconds
//  with 3 decimals.

// Example:

// new Date(2016, 2, 8, 16, 42, 59)
//Should return:
// "16:42:59,000"

// function convert(...args) {
//   console.log(args);
//   const dateFormat = new Date(...args);
//   console.log(dateFormat);
// }

function convert(...time) {
  const hours = time[3];
  const minutes = time[4];

  const secs = new Intl.NumberFormat("en-US").format(time[5] * 1000);

  console.log(`${hours}:${minutes}:${secs}`);
}

convert(2016, 2, 8, 16, 42, 59);
