function searchLaunches(query, callback) {
    //validaciones

    call('GET', undefined, 'https://api.spacexdata.com/v3/launches/' + query, undefined, (output) => {
        if(output.error) {//if query ''
            callback(new Error(error.message))
        }
        else {
            //filtrar
            
            callback(undefined, output)
        }
    })
}