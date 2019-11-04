let total = 0

const arguments = process.argv

total = arguments.slice(2).reduce((acum, act) =>  Number(acum) +  Number(act))

console.log(total)