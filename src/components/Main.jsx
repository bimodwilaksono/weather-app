import React from "react";
import { useRecoilValue } from "recoil";
import CurrentCard from "./CurrentCard";
import ForecastCard from "./ForecastCard";

const Main = () => {
    return (
        <div className='w-full mt-10'>
            <CurrentCard />
            <ForecastCard />
        </div>
    );
};

export default Main;
