import { useState } from "react";
import Search from "./components/Search";
import Main from "./components/Main";

function App() {
    const [city, setCity] = useState(null);
    const [cityDetail, setCityDetail] = useState(null);
    const [forecast, setForecast] = useState(null);

    const getCity = async (city) => {
        fetch(
            `/api/search?q=${city}`
        )
            .then((response) => response.json())
            .then((response) => {
                setCity(response.data[0]);
                getCityDetail(response.data[0].Key);
                getForecastFiveDays(response.data[0].Key);
            })
            .catch((error) => console.error(error));
    };

    const getCityDetail = async (id) => {
        fetch(`/api/current/${id}`)
            .then((response) => response.json())
            .then((response) => setCityDetail(response.data[0]))
            .catch((error) => console.error(error));
    };

    const getForecastFiveDays = async (id) => {
        fetch(
            `/api/forecast/${id}`
        )
            .then((response) => response.json())
            .then((response) => setForecast(response.data))
            .catch((error) => console.error(error));
    };
    console.log('city', city)
    console.log('cityDetail', cityDetail)
    console.log('forecast', forecast)
    return (
        <div className='App h-screen'>
            <Search getCity={getCity} />
            <Main city={city} cityDetail={cityDetail} forecast={forecast} />
        </div>
    );
}

export default App;
