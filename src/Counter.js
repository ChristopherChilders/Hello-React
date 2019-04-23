import React from "react";

//Do Not Do This!!!!!!!!!
// let badBadBad = 2;
// setInterval(() => {
//     badBadBad++
// }, 1000)

// If a component needs to remember stuff, 
// then you need a class!

class Counter extends React.Component{

    // define how the instance gets created
    // including the intial state
    constructor(props) {
        // activate the "super" powers from React.Component
        super(props);

        // this.state is always an object
        // where the component stores key value pairs
        this.state = {
            number: 0
        }
    }

    // do more setup when the component gets drawn to the page
    componentDidMount(){
        // console.log() shows up in the dev tools, not terminole
        console.log('hiya')
        // You cannot mutate state directly
        //this.state.number++

        setInterval(() => {
            // Safely chage state using this.setState()
            // It accepts and object with updated key/value pairs
            this.setState({
                number: this.state.number + 1
            })
        }, 1000)

    }

    // define what will be drawn
    render() {
        return (
            <h1>{this.state.number}</h1>
        )
    }
}

// Functions don't know how to remember
// function Counter(props) {
//     return (
//         <h1>{props.number}</h1>
//     );
// }


export default Counter;