import React from "react";
import dayjs from 'dayjs'

const ForecastCard = (props) => {
    const { forecast } = props;

    return (
        <div className='forecastCardWrapper flex justify-center gap-8 mt-8'>
            {forecast?.DailyForecasts?.slice(1)?.map((item, index) => {
                return (
                    <div key={index} className='forecastCard text-center w-28 h-24 rounded-md bg-green-700'>
                        <p>{dayjs(item.Date).format('ddd')}</p>
                        <div>icon</div>
                        <p>{item.Temperature.Minimum.Value} - {item.Temperature.Maximum.Value}</p>
                    </div>
                );  
            })}
        </div>
    );
};

export default ForecastCard;
