import React from 'react';
import FavoriteButton from "./FavoriteButton";
import ResultList from "./ResultList";
import SearchResult from "./SearchResult";

function ResultComponentsWrapper({
                                     result,
                                     isHidden,
                                     onTypeChangeHandler
                                 }) {
    return (
        <div
            className={"max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top " + isHidden}
        >
            <FavoriteButton/>
            <ResultList
                onTypeChangeHandler={onTypeChangeHandler}
            />
            <SearchResult
                stations={result.stations}
                distance={result.distance}
                duration={result.duration}
            />
        </div>
    );
}

export default ResultComponentsWrapper;