import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import { cityDetailState, cityState, enteredTitleState, forecastState, isLoadingState } from "../App";

const Search = (props) => {
    const { getCity } = props;
    const [enteredTitle, setEnteredTitle] = useRecoilState(enteredTitleState)
    const setCity = useSetRecoilState(cityState)
    const setCityDetail = useSetRecoilState(cityDetailState);
    const setForecast = useSetRecoilState(forecastState);
    const setLoading = useSetRecoilState(isLoadingState)

    const clearState = () => {
        setCity("");
        setCityDetail(null);
        setForecast(null);
        setLoading(false);
        setEnteredTitle("");
    };

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
