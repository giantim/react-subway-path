import React from 'react';
import PathStationTemplate from "./PathStationTemplate";

function SearchResultTemplate({stations, distance, duration}) {
    const lastIndex = stations.length - 1;

    return (
        <>
            <div className="px-2 py-4 border-b">
                <div className="w-full flex mb-3">
                    <div className="inline-block w-1/2 border-r text-center">
                        <div className="text-gray-600 text-sm">소요시간</div>
                        <div>{duration}분</div>
                    </div>
                    <div className="inline-block w-1/2 text-center">
                        <div className="text-gray-600 text-sm">거리</div>
                        <div>{distance}km</div>
                    </div>
                </div>
            </div>
            <div className="relative pt-3 pb-10">
                <div className="px-2 py-1 w-full flex">
                    <div className="w-10/12 inline-block">
                        {stations.map(
                            (station, index) => <PathStationTemplate
                                key={station.id}
                                name={station.name}
                                index={index}
                                lastIndex={lastIndex}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchResultTemplate;