import { useState } from "react";
import Search from "./components/Search";
import Main from "./components/Main";
import LoadingSpinner from "./components/LoadingSpinner";
import { atom, useRecoilState } from "recoil";
import axios from "axios";
import { useSetRecoilState } from "recoil";

export const cityState = atom({
    key: "cityState",
    default: null,
});

export const cityDetailState = atom({
    key: 'cityDetailState',
    default: null
})

export const forecastState = atom({
    key: 'forecastState',
    default: null
})

export const isLoadingState = atom({
    key: 'isLoadingState',
    default: false
})

export const enteredTitleState = atom({
    key: 'enteredTitleState',
    default: ''
})

function App() {
    const setCity = useSetRecoilState(cityState);
    const setCityDetail = useSetRecoilState(cityDetailState);
    const [forecast, setForecast] = useRecoilState(forecastState);
    const [isLoading, setLoading] = useRecoilState(isLoadingState);

    const getCity = async (city) => {
        setLoading(true);
         axios
            .get(`/api/search?q=${city}`)
            .then((response) => {
                setCity(response.data.data[0]);
                getCityDetail(response.data.data[0].Key);
                getForecastFiveDays(response.data.data[0].Key);
            })
            .catch((error) => console.log(error.message));
    };

    const getCityDetail = async (id) => {
         axios
            .get(`/api/current/${id}`)
            .then((response) => {
                setCityDetail(response.data.data[0])})
            .catch((error) => console.error(error));
    };

    const getForecastFiveDays = async (id) => {
         axios
            .get(`/api/forecast/${id}`)
            .then((response) => {
                setForecast(response.data.data);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className='App h-screen'>
            <Search
                getCity={getCity}
            />
            {isLoading ? (
                <LoadingSpinner />
            ) : forecast ? (
                <Main />
            ) : null}
        </div>
    );
}

export default App;
