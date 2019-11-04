const fs = require('fs')
const path = require('path')


fs.readdir(process.argv[2], function callback(error, files) {
    if(error) console.error(error)
    else (files.filter(file => path.extname(file) === "." + process.argv[3]).forEach(item => console.log(item)))})




    // const fs = require('fs')
    // const path = require('path')
    
    // const folder = process.argv[2]
    // const ext = '.' + process.argv[3]
    
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })
