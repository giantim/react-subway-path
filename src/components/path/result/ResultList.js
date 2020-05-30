import React, {useState} from 'react';
import ResultItem from "./ResultItem";

function ResultList({onTypeChangeHandler}) {
    const [click, setClick] = useState({
        distance: "active-tab",
        duration: ""
    });

    const onClickTypeHandler = type => {
        return type;
    }

    const changeType = () => {
        if (onClickTypeHandler() === "DISTANCE") {
            const data = {
                distance: "active-tab",
                duration: ""
            };
            changeState(data, "DISTANCE");
            return;
        }
        const data = {
            distance: "",
            duration: "active-tab"
        }
        changeState(data, "DURATION");
    }

    const changeState = (data, type) => {
        setClick(data);
        onTypeChangeHandler(type);
    }

    return (
        <ul className="flex border-b w-full">
            <ResultItem
                tabName={"최단거리"}
                isActive={click.distance}
                onClick={() => {
                    onClickTypeHandler("DURATION");
                    changeType();
                }}
            />
            <ResultItem
                tabName={"최소시간"}
                isActive={click.duration}
                onClick={() => {
                    onClickTypeHandler("DURATION");
                    changeType();
                }}
            />
        </ul>
    );
}

export default ResultList;