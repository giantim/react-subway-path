import React from 'react';

function FavoriteButton() {
    return (
        <button
            className="favorite-button bg-yellow-500 mdi mdi-star-outline absolute text-white bg-transparent d-inline-block font-semibold py-2 px-3 hover:border-transparent rounded-full z-10"
        >
        </button>
    );
}

export default FavoriteButton;