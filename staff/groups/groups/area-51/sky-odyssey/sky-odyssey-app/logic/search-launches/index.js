function searchLaunches(id, token, query, callback) {

    //validaciones

    // call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, user => {
    //     if(user.data.favs) const { data: { favs } } = user
    //     // destructuring: result.data.fav --> result = { data: { fav } }
    //     if(user.error) callback(new Error(user.error))

    call('GET', undefined, 'https://api.spacexdata.com/v3/launches/past', undefined, launchesPast => {
        if (launchesPast.error) {//if query ''
            callback(new Error(error.message))

        } else {
            const launches = launchesPast.filter(launchPast => launchPast.launch_year >= query && launchPast.launch_year <= query)
            if (id && token) {

                call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, user => {
                    // destructuring: result.data.fav-- > result = { data: { fav } }
                    if (user.error) callback(new Error(user.error))

                    if (user.data.favs) launches.forEach(launch => {
                        const { flight_number: flightNumber } = launch
                        let index = user.data.favs.includes(flightNumber)
                        if (index) launch.isFav = true
                        else launch.isFav = false
                    })

                    callback(undefined, launches)
                })
            } else callback(undefined, launches)



        }
    })

}