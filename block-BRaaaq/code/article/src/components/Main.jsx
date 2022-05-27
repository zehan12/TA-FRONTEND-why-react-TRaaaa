import React from "react";
import '../styles/Main.css';
import articles from '../data/data';
import Card from './Card'

// function Articles (){
//     return articles.map( article => < Card articleInfo={article}/> )
// }


function Main() {

    return <div>
        <h2 className="head">Articles</h2>
        <div className="articles">
        {articles.map((article,i)=> < Card key={i} {...article} /> )}
        </div>
    </div>
}


export default Main;