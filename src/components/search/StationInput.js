import React, {useState} from 'react';

const StationInput = ({initValue, inputName, getStationName}) => {
    const [input, setInput] = useState(initValue);

    const onChangeHandler = (event) => {
        setInput(event.target.value);
        getStationName(event.target.value);
    }

    return (
        <div
            className="w-5/12 h-12 text-center text-gray-800"
        >
            <input
                className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                type="text"
                value={input}
                placeholder={inputName}
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default StationInput;