import React from 'react';

function ResultItem({tabName, isActive, onClick}) {
    return (
        <>
            <li className={"-mb-px w-2/4 tab-menu " + isActive}>
                <a
                    className="w-full text-center inline-block py-2 px-4 font-semibold"
                    onClick={onClick}
                >
                    {tabName}
                </a>
            </li>
        </>
    );
}

export default ResultItem;