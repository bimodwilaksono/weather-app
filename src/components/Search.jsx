import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Search = (props) => {
    const { getCity, clearState, setEnteredTitle, enteredTitle } = props;

    return (
        <div className='mt-5 text-center'>
            <p className='text-7xl font-semibold text-white'>Weather App</p>
            <form
                className='flex justify-center items-center gap-2 text-center mt-5'
                onSubmit={(e) => {
                    e.preventDefault();
                    getCity(e.target[0].value);
                }}>
                <input
                    className='border-2 border-black rounded-md h-10 py-1 px-2 w-1/4'
                    type='text'
                    name='city'
                    placeholder='Enter city name....'
                    value={enteredTitle}
                    onChange={(e) => setEnteredTitle(e.target.value)}
                />
                <RiDeleteBin6Line className='hover:cursor-pointer' fill='white' onClick={clearState} />
            </form>
        </div>
    );
};

export default Search;
