const mymodule = require('./mymodule.js')

const {argv: [, , directory, extension]} = process


mymodule(directory, extension, (error, listado) => {
    if(error) console.error(error)
    else listado.forEach(item => console.log(item))
})



'use strict'
const mymodule = require('./mymodule.js')
const directory = process.argv[2]
const extension = process.argv[3]

mymodule(directory, extension, function (err, listado) {
  if (err) {
    return console.error('There was an error:', err)
  }

  listado.forEach(function (item) {
    console.log(item)
  })
})


