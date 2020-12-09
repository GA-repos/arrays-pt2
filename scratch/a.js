const log = function() {
    const key = Object.keys(this)[0];
    const value = this[key];
    console.log(`${key}:${value}`);
  }

boolArr = [true, false, true, true]

intArr = new Array()
boolArr.forEach(bool => intArr.push(bool ? 1: 0))

let totalCorrect = intArr.reduce((a,b) => a+b)

log.call({totalCorrect})

Array.forEach()
Array.apply()
