const {print} = require('../utils')

const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 4000)
  })
}

print('sum(2, 3).then(...), wait 4000ms')
sum(2, 3).then(result => { print(`=> ${result}`) })
