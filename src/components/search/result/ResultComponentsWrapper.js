import React from 'react';
import FavoriteButton from "./FavoriteButton";
import ResultList from "./ResultList";
import SearchResult from "./SearchResult";

function ResultComponentsWrapper({stations, distance, duration, isHidden}) {
    return (
        <div
            className={"max-w-sm w-full lg:width-350px rounded bg-white shadow-lg p-6 relative border top hidden"}
        >
            <FavoriteButton/>
            <ResultList/>
            <SearchResult
                stations={stations}
                distance={distance}
                duration={duration}
            />
        </div>
    );
}

export default ResultComponentsWrapper;