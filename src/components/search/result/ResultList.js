import React from 'react';
import ResultItem from "./ResultItem";

function ResultList() {
    return (
        <ul className="flex border-b w-full">
            <ResultItem
                tabName={"최단거리"}
            />
            <ResultItem
                tabName={"최소시간"}
            />
        </ul>
    );
}

export default ResultList;