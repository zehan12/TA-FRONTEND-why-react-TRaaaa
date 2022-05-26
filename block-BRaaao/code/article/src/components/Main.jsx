import React from "react";
import '../styles/Main.css';
import articles from '../data/data';
console.log(articles);


function Card ( props ) {
    console.log(props);
    return <div className="card">
            <img src={props.articleInfo.urlToImage} alt="" />
            <h2>{props.articleInfo.title}</h2>
            <p>Author: {props.articleInfo.author}</p>
            <p>{props.articleInfo.publishedAt}</p>
            <p>{props.articleInfo.description}</p>
        </div>
}

function Articles (){
    console.log(articles,"articles");
    return articles.map( article => < Card articleInfo={article}/> )
}

function Main() {

    return <div>
        <h2 className="head">Articles</h2>
        <div className="articles">
        < Articles />
        </div>
    </div>
}

export default Main;