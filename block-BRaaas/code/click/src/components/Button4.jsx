import React from "react";
import fruits from "../data/data";


function Button( props ){
    return <button onClick={()=>alert(`${props.value}`)}> { props.value } </button>
}

function Button4(){
    return <>{ fruits.map((v)=> < Button key={v.id} {...v} /> ) }</>
}



export default Button4;