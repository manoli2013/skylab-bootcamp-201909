import React from 'react';


import AgentClientResults from '../AgentClientResults';
import AgentSearch from '../AgentSearch'


export default (function ({ clients , onSubmitRoute, onBack}) {
debugger
    

    return <>

        <h1>Hola main</h1>

        {/* //Barra de busqueda
        //select de búsqueda
        //Compo Results */}

        <AgentSearch clients={clients} onSubmitRoute={onSubmitRoute}  />
        <AgentClientResults clients={clients} />

        <a className="main__back" href="" onClick={event => {
            event.preventDefault()

            onBack()
        }}>Go back</a>
    </>


})

