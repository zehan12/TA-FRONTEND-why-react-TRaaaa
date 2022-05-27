import React from "react";
import movieList from '../data/data'

console.log(movieList)

function Input() {
    function handelInput ( event ) {
        let value = event.target.value;
        if(event.keyCode === 13 && value !== ''){
            movieList.push({title:value, isWatched:false});
            event.target.value = ""; 
        console.log(value)
        createUI();
        }
    }
    return <input onKeyUp={ handelInput } className="inputText" type="text" placeholder="Enter the movie name!"></input>
}

function Li(props) {
    return <li>
        <span>props.title</span>
    </li>
}

function createUI () {
    return <ul>
        { movieList.map((v,i)=> < Li key={i} {...v} />) }
    </ul>
}



export default Input;