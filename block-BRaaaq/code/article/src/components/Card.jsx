import React from "react";
import '../styles/Main.css';
import propTypes from "prop-types";


function Card ( props ) {
    return <div className="card">
            <img src={props.urlToImage} alt="" />
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <p>{props.publishedAt}</p>
            <p>{props.description}</p>
        </div>
}

Card.propTypes = {
    title: propTypes.string.isRequired,
    urlToImage: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}

export default Card;
