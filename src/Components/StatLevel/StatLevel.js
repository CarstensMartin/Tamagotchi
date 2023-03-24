import "./StatLevel.css"
import React, { useEffect } from 'react'

export default function FeedBar({title, level, color}) {

    return (
        <div className='stat-level' id='stat-level' style={{backgroundColor: color}}>
            <div className="stat-level-title-wrapper">
                <span id="stat-level-title">{title}</span>
            </div>
        </div>    
    )
}
