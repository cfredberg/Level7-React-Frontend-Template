import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../Spinner/Spinner";
import classes from './SearchOutput.module.css';

const SearchOutput = (props) => {
    let message = null;

    if (props.term && props.results.length !== 0) {
        message = <p>Showing {props.results.length} results</p>;
    } else if (props.term) {
        message = <Spinner/>;
    } else if (props.term === null){
        message = "no results found";
    }

    let searchResults = null;
    if (props.results) {
        searchResults =
            props.results.map((result, index) => {
                return (
                    <SearchResult
                        key={index}
                        adult={result.adult}
                        originalLanguage={result.originalLanguage}
                        overview={result.overview}
                        popularity={result.popularity}
                        posterPath={result.posterPath}
                        releaseDate={result.releaseDate}
                        title={result.title}
                        voteAverage={result.voteAverage}
                        voteCount={result.voteCount}
                    />
                );
            })
    }

    return (
        <div className={classes.Result}>
            {message}
            {searchResults}
        </div>
    )
}

export default SearchOutput;