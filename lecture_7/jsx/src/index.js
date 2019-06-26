// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { blue } from 'ansi-colors';

// Create a react componente

const App = function() {
    const buttonText = 'Click me';
    const style_button = {
        backgroundColor: 'blue',
        color: 'white'
    }

    return (
        <div >
            <label htmlFor="name" className="label">
                Name: 
            </label>
            <input id="name"/>
            <button  style={style_button}>
                {buttonText}
            </button>
        </div>
    );
}

// Take the react componente and show it on the screen

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)