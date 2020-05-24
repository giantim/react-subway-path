import React from 'react';

function SearchButton({onClick}) {
    return (
        <button
            type="submit" id="search-button"
            className="w-full text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded-sm"
            onClick={onClick}
        >
            검색
        </button>
    );
}

export default SearchButton;