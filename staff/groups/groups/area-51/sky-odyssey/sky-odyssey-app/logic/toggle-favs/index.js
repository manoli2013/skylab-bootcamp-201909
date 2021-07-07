function toggleFav(id, token, idLaunch, callback) {


    call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result => {

        if (result.error) callback(new Error(result.error))
        else {

            if (result.data.favs) {
                let { data: { favs } } = result
                const index = favs.indexOf(idLaunch)
                if (index > -1) favs.splice(index, 1)
                else favs.push(idLaunch)

                call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, { favs }, result => {
                    result.error ? callback(new Error(result.error)) : callback();
                })
            }
            else {

                call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, { favs: [idLaunch] }, result => {
                    result.error ? callback(new Error(result.error)) : callback();
                })
            }

        }
    })

}
