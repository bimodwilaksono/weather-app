import React from "react";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";

const Main = (props) => {
    const {city, cityDetail, forecast} = props;
    return (
        <div className='w-full mt-10'>
            {/* <div className='Card mx-auto text-center py-5 rounded-md w-96 h-96 bg-lime-400'>
                <p>Pemalang, ID</p>
                <p>31 C</p>
                <div>icon</div>
                <p>weather condition</p>
            </div> */}
            <CurrentCard city={city} cityDetail={cityDetail} />
            <ForecastCard forecast={forecast} />
            {/* <div className='forecastCardWrapper flex justify-center gap-2 mt-5'>
                {Array.from({ length: 6 }, (_, index) => {
                    return (
                        <div key={index} className='forecastCard text-center rounded-md bg-green-700'>
                            <p>Sabtu</p>
                            <div>icon</div>
                            <p>Temperature</p>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
};

export default Main;
