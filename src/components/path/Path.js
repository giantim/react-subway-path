import React, {useState} from 'react';
import SearchComponentsWrapper from "./search/SearchComponentsWrapper";
import ResultComponentsWrapper from "./result/ResultComponentsWrapper";
import axios from "axios";

function Path() {
    const [result, setResult] = useState({
        stations: [],
        duration: 0,
        distance: 0
    });
    const [departureStation, setDepartureStation] = useState("");
    const [arrivalStation, setArrivalStation] = useState("");
    const [isHidden, setIsHidden] = useState("hidden");
    const [type, setType] = useState("");

    const onSearchPathHandler = async (type) => {
        try {
            const response = await axios.get(
                `/paths?source=${departureStation}&target=${arrivalStation}&pathType=${type}`
            );
            const result = response.data;
            setStates(result, type);
            setIsHidden("");
        } catch (exception) {
            window.alert(exception);
        }
    }

    const setStates = (result, type) => {
        const data = {
            stations: result.stations,
            duration: result.duration,
            distance: result.distance
        };
        setResult(data);
        setType(type);
    }

    const onGetDepartureNameHandler = stationName => {
        setDepartureStation(stationName);
    }

    const onGetArrivalNameHandler = stationName => {
        setArrivalStation(stationName);
    }

    return (
        <>
            <SearchComponentsWrapper
                departureStation={departureStation}
                onGetDepartureNameHandler={onGetDepartureNameHandler}
                arrivalStation={arrivalStation}
                onGetArrivalNameHandler={onGetArrivalNameHandler}
                onSearchPathHandler={onSearchPathHandler}
            />
            <ResultComponentsWrapper
                result={result}
                isHidden={isHidden}
                onTypeChangeHandler={onSearchPathHandler}
            />
        </>
    );
}

export default Path;