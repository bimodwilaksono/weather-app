import { useState } from "react";
import Search from "./components/Search";
import Main from "./components/Main";

function App() {
    const [city, setCity] = useState(null);
    const [cityDetail, setCityDetail] = useState(null);
    const [forecast, setForecast] = useState(null);

    const getCity = async (city) => {
        fetch(
            `${import.meta.env.VITE_BASE_URL}/locations/v1/cities/search?apikey=${
                import.meta.env.VITE_API_KEY
            }&q=${city}`
        )
            .then((response) => response.json())
            .then((response) => {
                setCity(response);
                getCityDetail(response[0].Key);
                getForecastFiveDays(response[0].Key);
            })
            .catch((error) => console.error(error));
    };

    const getCityDetail = async (id) => {
        fetch(`${import.meta.env.VITE_BASE_URL}/currentconditions/v1/${id}?apikey=${import.meta.env.VITE_API_KEY}`)
            .then((response) => response.json())
            .then((response) => setCityDetail(response))
            .catch((error) => console.error(error));
    };

    const getForecastFiveDays = async (id) => {
        fetch(
            `${import.meta.env.VITE_BASE_URL}/forecasts/v1/daily/5day/${id}?apikey=${
                import.meta.env.VITE_API_KEY
            }&metric=${true}`
        )
            .then((response) => response.json())
            .then((response) => setForecast(response))
            .catch((error) => console.error(error));
    };
    
    return (
        <div className='App h-screen'>
            <Search getCity={getCity} />
            <Main city={city} cityDetail={cityDetail} forecast={forecast} />
        </div>
    );
}

export default App;
