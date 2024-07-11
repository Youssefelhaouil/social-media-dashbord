import React from 'react';
import fbIcon from '/images/icon-facebook.svg';
import twIcon from '/images/icon-twitter.svg';
import igIcon from '/images/icon-instagram.svg';
import ytIcon from '/images/icon-youtube.svg';
import iconUp from '/images/icon-up.svg';
import iconDown from '/images/icon-down.svg';

export default function Overviews({ isDark }) {
    const overviews = [
        {
            title: "Page Views",
            logo: fbIcon,
            number: 87,
            percentage: 3
        },
        {
            title: "Likes",
            logo: fbIcon,
            number: 52,
            percentage: -2
        },
        {
            title: "Likes",
            logo: igIcon,
            number: 5462,
            percentage: 2257
        },
        {
            title: "Profile Views",
            logo: igIcon,
            number: '52k',
            percentage: 1375
        },
        {
            title: "Retweets",
            logo: twIcon,
            number: 117,
            percentage: 303
        },
        {
            title: "Likes",
            logo: twIcon,
            number: 507,
            percentage: 553
        },
        {
            title: "Likes",
            logo: ytIcon,
            number: 107,
            percentage: -19
        },
        {
            title: "Total Views",
            logo: ytIcon,
            number: 1407,
            percentage: 12
        }

    ]
    return (
        <>
            <h1 className={`font-sans font-bold text-[25px] pt-10 ${isDark ? "text-white" : "text-dark-grayish-blue-text-light"}`}>Overview-Today</h1>
            <div className="w-full grid grid-cols-4 grid-rows-2 gap-6 lg:flex lg:flex-wrap lg:justify-center lg:items-center pt-6 ">
                {overviews.map((overview, index) => (
                    <div key={index} className={`flex flex-col gap-8 px-6 py-2 h-[150px] w-[240px]  lg:w-full hover:bg-gray-300  rounded-md ${isDark ? "bg-dark-desaturated-blue-card-bg-dark hover:bg-gray-700" : "bg-light-grayish-blue-card-bg-light hover:bg-gray-300 "}`}>
                        <span className={`flex justify-between items-center pt-5 gap-x-2 font-sans font-base ${isDark ? "text-desaturated-blue-text-dark" : ""}`}>
                            {overview.title} <img src={overview.logo} alt="facebook-icon" />
                        </span>
                        <div className='flex justify-between items-center'>
                            <h1 className={`font-sans font-bold text-[35px] text-center  ${isDark ? "text-white" : ""}`}>{overview.number}</h1>
                            <h4 className={`flex gap-2 justify-center items-center font-sans ${overview.percentage > 0 ? "text-lime-green" : "text-red"}   text-[15px] text-center  ${isDark ? "text-desaturated-blue-text-dark" : "text-dark-grayish-blue-text-light"}`}>
                                <img className='w-3 h-2' src={overview.percentage > 0 ? iconUp : iconDown} alt="" />
                                {overview.percentage}%
                            </h4>
                        </div>
                    </div>


                ))}
            </div>

        </>
    )
}