import React from "react";

const Search = (props) => {
    const { getCity } = props;

    return (
        <div className='mt-5 text-center'>
            <p className='text-7xl font-semibold text-white'>Weather App</p>
            <form
                className='text-center mt-5'
                onSubmit={(e) => {
                    e.preventDefault();
                    getCity(e.target[0].value)
                }}>
                <input
                    className='border-2 border-black rounded-md h-10 py-1 px-2 w-1/2'
                    type='text'
                    name='city'
                    placeholder='Enter city name....'
                />
            </form>
        </div>
    );
};

export default Search;
