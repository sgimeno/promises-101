const {print} = require('./utils')
// 1 Non-blocking function
const sum = (a, b) => {
  return a + b
}

print('sum(2, 3), wait 0ms')
const result = sum(2, 3)
print(`=> ${result}`) // 5
