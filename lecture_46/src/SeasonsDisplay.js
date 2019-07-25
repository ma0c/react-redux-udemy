import "./SeasonsDisplay.css";
import React from 'react';

const getSeason = (latitude, month) =>
{
    if (month > 2 && month < 9)
    {
        return latitude > 0? 'summer' : 'winter';
    }
    else
    {
        return latitude > 0? 'winter': 'summer';
    }
}

const season_config = {
    summer: {
        text: "It is summer go to the beach",
        icon: "sun"
    },
    winter: {
        text: "It is winter, let's not go anywhere",
        icon: "snowflake"
    }
}
const SeasonDisplay = (props) =>
{
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, icon }  = season_config[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`}></i>
            <h1>
                {text}
            </h1>
            <i className={ `icon-right massive ${icon} icon`}></i>
        </div>
    )
}


export default SeasonDisplay;