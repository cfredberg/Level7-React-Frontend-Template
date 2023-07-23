import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Title: {props.title}</h1>
            <h3>Released: {props.releaseDate}</h3>
        </article>
    );
}

export default SearchResult;