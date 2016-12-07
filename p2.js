const {print} = require('./utils')
// 2 Blocking function
// Why this code doesn't work?
const sum = (a, b) => {
  setTimeout(() => {
    return a + b
  }, 2000)
}

print('sum(2, 3), wait 2000ms');
const result = sum(2, 3)
print(`=> ${result}`)
// Can you fix it?
