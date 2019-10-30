function searchLaunches(query, callback) {
    //validaciones

    call('GET', undefined, 'https://api.spacexdata.com/v3/launches/past', undefined, (output) => {
        if(output.error) {//if query ''
            callback(new Error(error.message))
        }
        else {
   
            
            const results = output.filter(result => result.launch_year >= query && result.launch_year <= query)
           
            callback(undefined, results)

        }
    })
}