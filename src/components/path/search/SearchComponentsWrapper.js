import React from 'react';
import StationInput from "./StationInput";
import DirectionArrow from "./DirectionArrow";
import SearchButton from "./SearchButton";
import SearchTitle from "./SearchTitle";

function SearchComponentsWrapper({
                                     departureStation,
                                     onGetDepartureNameHandler,
                                     arrivalStation,
                                     onGetArrivalNameHandler,
                                     onSearchPathHandler
                                 }) {

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
                    onClick={() => onSearchPathHandler("DISTANCE")}
                />
            </div>
        </>
    );
}

export default SearchComponentsWrapper;