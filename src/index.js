import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {


    //Way 1 to initialize state : 
    constructor(props) {
        super(props);
        console.log(props); s
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude:</div>
    }
}


ReactDOM.render(<App />, document.querySelector('#root'))