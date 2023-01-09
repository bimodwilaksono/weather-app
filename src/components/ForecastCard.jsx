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
                        <img src={item.Day.Icon.toString().length == 1 ? `https://developer.accuweather.com/sites/default/files/0${item.Day.Icon}-s.png` : `https://developer.accuweather.com/sites/default/files/${item.Day.Icon}-s.png`}></img>
                        <p>{item.Temperature.Minimum.Value}°C - {item.Temperature.Maximum.Value}°C</p>
                    </div>
                );  
            })}
        </div>
    );
};

export default ForecastCard;
