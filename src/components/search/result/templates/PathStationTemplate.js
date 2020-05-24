import React from 'react';

function PathStationTemplate({name, index, lastIndex}) {
    if (index === 0) {
        return (
            <>
                <span className="font-bold">{name}</span>
            </>
        )
    }

    if (index === lastIndex) {
        return (
            <>
                <span className="mdi mdi-arrow-right-bold text-gray-500"/>
                <span className="font-bold">{name}</span>
            </>
        )
    }

    if (index !== lastIndex) {
        return (
            <>
                <span className="mdi mdi-arrow-right-bold text-gray-500"/>
                <span className="text-gray-600">{name}</span>
            </>
        )

    }
}

export default PathStationTemplate;