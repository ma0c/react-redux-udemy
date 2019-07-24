import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonsDisplay'


class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            latitude: null,
            error_message: ''
        };   
    }

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            (position) => 
            {
                this.setState({latitude: position.coords.latitude});
                console.log(position)
            },
            (error) => 
            {
                this.setState({error_message: error.message})
            }
        );
    }

    render() 
    {
        if(this.state.error_message && ! this.state.latitude)
        {
            return (
                <div>Error: {this.state.error_message}</div>
            )
        }
        if(!this.state.error_message && this.state.latitude)
        {
            return (
                <SeasonDisplay latitude={this.state.latitude}/>
            )
        }
        return (
            <div>
                Loading
            </div>
        )
        
    }

    

    componentDidUpdate()
    {
        console.log("Component UPDATED");
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)