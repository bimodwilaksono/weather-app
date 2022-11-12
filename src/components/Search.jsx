import React, { useState, useEffect } from "react";
import * as dayjs from 'dayjs'

const Search = (props) => {
    const { getCity } = props;

    useEffect(() => {
        const inputForm = document.querySelector("form");

        inputForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const citySearch = inputForm.city.value.trim();
            getCity(citySearch);
        });
        
        return () => {
            inputForm.removeEventListener("submit", (e) => {
                e.preventDefault();
                const citySearch = inputForm.city.value.trim();
                getCity(citySearch);
            });
        };
    }, []);

    return (
        <form className='text-center mt-5'>
            <input
                className='border-2 border-black rounded-md h-10 py-1 px-2 w-1/2'
                type='text'
                name='city'
                placeholder='Enter city name....'
            />
        </form>
    );
};

export default Search;