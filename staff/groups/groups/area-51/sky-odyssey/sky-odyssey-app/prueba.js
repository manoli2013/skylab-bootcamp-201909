const { Component } = React

class App extends Component {

    render() {
        //declaramos las variables y asignamos a scope de App

        const {state: {view, error}} = this

        return (<>
            <Landing />
        </>
        )
    }

}