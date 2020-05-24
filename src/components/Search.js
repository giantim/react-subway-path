import React from 'react';
import SearchComponentsWrapper from "./search/SearchComponentsWrapper";

function Search(props) {
    return (
        <div className="flex justify-center items-center flex-col app-container md:py-10 lg:py-10 relative">
            <SearchComponentsWrapper/>
        </div>
    );
}

export default Search;