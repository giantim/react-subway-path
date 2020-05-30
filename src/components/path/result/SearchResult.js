import React from 'react';
import SearchResultTemplate from "./templates/SearchResultTemplate";

function SearchResult({stations, distance, duration}) {
    return (
        <div id="search-result">
            <SearchResultTemplate
                stations={stations}
                distance={distance}
                duration={duration}
            />
        </div>
    );
}

export default SearchResult;