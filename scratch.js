
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncNum = num;
  var truncStr = str;
  if(num > 3) {
    truncNum -= 3;
  }
  if(str.length > num) {
    truncStr = str.slice(0, truncNum) + '...';
  }
  return truncStr;
}


var testArr = ['a','b','c','d','e','f','g','h'];

const chunkArrayInGroups = (arr, size) => {
  // Break it up.
  var arrChunks = [];
  var arrSplit = [];
  var count = 0;
  arr.map((item, index, array) => {
    arrChunks.push(item);
    count++;
    if (count === size) {
      arrSplit.push(arrChunks);
      arrChunks = [];
      count = 0;
    } else if (index === array.length - 1) {
      arrSplit.push(arrChunks);
    }
  });
  return arrSplit;
};

const chunkArrayInGroups = (arr, size) => {
  // Break it up.
  var arrChunks = [];
  var arrSplit = [];
  var count = 0;
  arr.map((item, index, array) => {
    arrChunks.push(item);
    count++;
    if (count === size) {
      arrSplit.push(arrChunks);
      arrChunks = [];
      count = 0;
    } else if (index === array.length - 1) {
      arrSplit.push(arrChunks);
    }
  });
  return arrSplit;
};


/**
 * Return true if the string in the first element of the array contains all of 
 * the letters of the string in the second element of the array.
 */
var testArr = ['Hello', 'olleh']
const mutation = (arr) => {
  for (let i = 0; i < arr[0].length; i++) {
    var str1 = arr[0].toLowerCase();
    var str2 = arr[1].toLowerCase();
    if(str1.indexOf(str2.slice(i, i +  1)) === -1) {
      return false;
    }
  }
  return true;
};

/**
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */
var testArr = [7, "ate", "", false, 9]

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(item) {
    return item ? true : false;
  });
}

/**
 * You will be provided with an initial array (the first argument in the 
 * destroyer function), followed by one or more arguments. Remove all elements 
 * from the initial array that are of the same value as these arguments.
 */
var testArr = [1, 2, 3, 1, 2, 3]

function destroyer(arr, ...args) {
  return arr.filter(function (item) {
    return args.indexOf(item) < 0;
  });
}
