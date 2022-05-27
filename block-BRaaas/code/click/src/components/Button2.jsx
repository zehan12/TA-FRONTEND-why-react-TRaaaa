import React from "react";

function Button2(){
    function handleClick(){
        alert(`To learn React use https://reactjs.org`)
        alert(`React and ReactDOM works together`)
        alert(`Babel helps in writing JSX`)
    }
    return <button onClick={ handleClick}>How can I help you?</button>
}

export default Button2;