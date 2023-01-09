import React from "react";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";

const Main = (props) => {
    const { city, cityDetail, forecast } = props;
    return (
        <div className='w-full mt-10'>
            <CurrentCard city={city} cityDetail={cityDetail} />
            <ForecastCard forecast={forecast} />
        </div>
    );
};

export default Main;
