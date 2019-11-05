// You must write a module file (mymodule.js) to do most of the work. The  
// module must export a single function that takes three arguments: the  
// directory name, the filename extension string and your callback function,  
// in that order.

const fs = require('fs')
const path = require('path')

module.exports = (directory, extension, callback) => {
    fs.readdir(directory, (error, files) => {
        if(error) return callback(error)
        else (result = files.filter(file => path.extname(file) === '.' + extension))

        return callback(undefined,result)
    
})
}

'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (err, files) {
    if (err) {
      return callback(err)
    }

    result = files.filter(function (file) {
      return path.extname(file) === '.' + extension
    })

    callback(null, result)
  })
}

