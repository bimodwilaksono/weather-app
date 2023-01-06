import React from "react";
import dayjs from 'dayjs'
import { WiDayCloudy } from "react-icons/wi";

const CurrentCard = (props) => {
  const {city, cityDetail} = props;
  const currentDate = dayjs(new Date()).format('MMM D, hh:mm a')
  const cityName = city?.EnglishName
  const countryName = city?.Country?.EnglishName
  const currentTemp = cityDetail?.Temperature?.Metric?.Value
  const currentWeather = cityDetail?.WeatherText

    return (
        <div className='Card mx-auto text-center py-5 rounded-md w-48 h-48 bg-[#1b1c48] text-white'>
            <p className="text-left">Today {currentDate}</p>
            <p>{cityName}, {countryName}</p>
            <p>{`${currentTemp}°C`}</p>
            {/* <img src={WiDayCloudy} alt="" /> */}
            <p>{currentWeather}</p>
        </div>
    );
};

export default CurrentCard;
