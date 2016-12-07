const {print} = require('../utils')
// Using callbacks for asynchronous code
const sum = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b)
  }, 2000)
}

const callback = (result) => {
  print(`=> ${result}`) // 5 after having waited 500ms
}

print('sum(2, 3, print), wait 2000ms')
sum(2, 3, callback)
