import React from "react";

class Button3 extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }

    handleClick(){
        alert(`To learn React use https://reactjs.org`)
        alert(`React and ReactDOM works together`)
        alert(`Babel helps in writing JSX`)
    }
    render(){
        return <>
            <button onClick={ this.handleClick }>How can I help you?</button>
        </>
    }
}

export default Button3;