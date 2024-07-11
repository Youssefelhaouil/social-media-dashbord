import React from 'react';
import fbIcon from '/images/icon-facebook.svg';
import twIcon from '/images/icon-twitter.svg';
import igIcon from '/images/icon-instagram.svg';
import ytIcon from '/images/icon-youtube.svg';
import iconUp from '/images/icon-up.svg';
import iconDown from '/images/icon-down.svg';

export default function Stats({ isDark }) {
    const stats = [
        {
            platform: 'Facebook',
            username: '@nathanf',
            followers: '1987',
            type: "FOLLOWERS",
            change: 12,
            logo: fbIcon,
            color: 'fb'
        },
        {
            platform: 'Twitter',
            username: '@nathanf',
            followers: '1044',
            type: "FOLLOWERS",
            change: 99,
            logo: twIcon,
            color: 'tw'
        },
        {
            platform: 'Instagram',
            username: '@realnathanf',
            followers: '11K',
            type: "FOLLOWERS",
            change: 1099,
            logo: igIcon,
            color: {
                start: 'instagram-start',
                end: 'instagram-end'
            }
        },
        {
            platform: 'Youtube',
            username: 'Nathan F.',
            subscribers: '8239',
            type: "SUBSCRIBERS",
            change: -144,
            logo: ytIcon,
            color: 'yt'
        }

    ];


    return (
        <>
            <div className='pt-7 z-10 flex flex-row lg:flex-wrap justify-center items-center gap-6   '>
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`relative h-[220px] w-full  rounded-md 
                        ${isDark ? "bg-dark-desaturated-blue-card-bg-dark hover:bg-gray-700" : "bg-light-grayish-blue-card-bg-light hover:bg-gray-300"}
                        ${stat.platform === 'Instagram' ? ` border-gradient-instagram` : ``}
                        ${stat.platform === 'Facebook' ? `border-t-4 border-t-fb` : ``}
                        ${stat.platform === 'Twitter' ? `border-t-4 border-t-tw` : ``}
                        ${stat.platform === 'Youtube' ? `border-t-4 border-t-yt` : ``}

                        `}
                    >
                        <span className={`flex justify-center items-center pt-5 gap-x-2 font-sans font-bold font-base ${isDark ? "text-desaturated-blue-text-dark" : "text-dark-grayish-blue-text-light"} `}>
                            <img src={stat.logo} alt={`${stat.platform}-icon`} /> {stat.username}
                        </span>
                        <h1 className={`font-sans font-bold text-[50px] text-center pt-2 ${isDark ? "text-white" : ""}`}>{stat.followers || stat.subscribers}</h1>
                        <h4 className={`font-sans text-dark-grayish-blue-text-light text-[20px] text-center mt-[-10px] ${isDark ? "text-desaturated-blue-text-dark" : ""}`}>
                            {stat.type}
                        </h4>
                        <h1 className={`flex justify-center items-center gap-1 pt-7 ${stat.change > 0 ? 'text-lime-green' : 'text-red'} font-sans`}>
                            <img src={stat.change > 0 ? iconUp : iconDown} alt="" className='h-2 w-3' /> {stat.change > 0 ? `+${stat.change}` : stat.change} today
                        </h1>
                    </div>
                ))}
            </div>
        </>
    );
}
