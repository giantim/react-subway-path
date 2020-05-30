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

// <li id="shortest-distance-tab" className="-mb-px w-2/4 active-tab tab-menu">
//     <a className="w-full text-center inline-block py-2 px-4 font-semibold" href="#">최단거리</a>
// </li>
// <li id="minimum-time-tab" className="-mb-px w-2/4 tab-menu">
//     <a className="w-full text-center bg-white inline-block py-2 px-4 font-semibold" href="#"
//     >최소시간</a
//     >
// </li>