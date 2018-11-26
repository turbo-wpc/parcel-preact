import './src/css/index'
import { h, render, Component } from 'preact'

class App extends Component {
    componentDidMount(){
        console.log(666)
    }
    render() {
        let time = new Date().toLocaleTimeString()
        return (
            <div>
                <span>{ time }</span>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'))