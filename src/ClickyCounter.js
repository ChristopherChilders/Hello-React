import React from 'react';


class ClickyCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    render(){
        return(
            // In JSX, you can type <></> instead of doing <div>
            // It's called a React.Fragment
            <div>  
                <h3>{this.state.number}</h3>
                <button 
                onClick={this._incrementNumber}
                >Do Not Push</button>
            </div>
        );
    }

    _incrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
}


export default ClickyCounter;