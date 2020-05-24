import React, {useState} from 'react';
import StationInput from "./StationInput";
import DirectionArrow from "./DirectionArrow";
import SearchButton from "./SearchButton";
import SearchTitle from "./SearchTitle";
import axios from "axios";
import ResultComponentsWrapper from "./result/ResultComponentsWrapper";

function SearchComponentsWrapper(props) {
    const [stations, setStations] = useState([]);
    const [departureStation, setDepartureStation] = useState("");
    const [arrivalStation, setArrivalStation] = useState("");
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);

    const onSearchPathHandler = async () => {
        try {
            const response = await axios.get(
                `/paths?source=${departureStation}&target=${arrivalStation}&type=DISTANCE`
            );
            const result = response.data;
            setStates(result);
        } catch (exception) {
            window.alert(exception);
        }
    }

    const setStates = (result) => {
        setStations(result.stations);
        setDuration(result.duration);
        setDistance(result.distance);
    }

    const onGetDepartureNameHandler = (stationName) => {
        setDepartureStation(stationName);
    }

    const onGetArrivalNameHandler = (stationName) => {
        setArrivalStation(stationName);
    }

    return (
        <>
            <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
                <SearchTitle/>
                <div className="flex flex-wrap mb-3">
                    <StationInput
                        initValue={departureStation}
                        inputName="출발역"
                        getStationName={onGetDepartureNameHandler}
                    />
                    <DirectionArrow/>
                    <StationInput
                        initValue={arrivalStation}
                        inputName="도착역"
                        getStationName={onGetArrivalNameHandler}
                    />
                </div>
                <SearchButton
                    onClick={onSearchPathHandler}
                />
            </div>
            <ResultComponentsWrapper
                stations={stations}
                distance={distance}
                duration={duration}
                isHidden={}
            />
        </>
    );
}

export default SearchComponentsWrapper;