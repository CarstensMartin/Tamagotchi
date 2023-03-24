import "./StatLevel.css"
import React, { useEffect } from 'react'

export default function StatLevel({title, level}) {

    useEffect(() => {
        let stat = document.get
    }, [level])

    return (
        <div className="stat-level-comp-wrapper">
            <div className='stat-level' id='stat-level'>
                <div className="stat-level-title-wrapper">
                    <span id="stat-level-title">{title}</span>
                </div>
            </div> 
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="80px" height="80px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#684CAA" />
                    <stop offset="100%" stopColor="#145AFF" />
                    </linearGradient>
                </defs>
                <circle id="tomagachi--level--circle" cx="42" cy="42" r="33" strokeLinecap="round" />
            </svg> 
        </div>
          
    )
}
