import "./StatLevel.css"
import React, { useEffect } from 'react'

export default function FeedBar({title, level, color}) {

    // useEffect(() => {
    //     const feedbar = document.getElementById("stat-level")
    //     feedbar.style = `height: ${level}%`      
    // }, [level])

    return (
        <div className='stat-level' id='stat-level'>
            <div className="stat-level-title-wrapper">
                <span id="stat-level-title">{title}</span>
            </div>
        </div>    
    )
}
