import "./FeedBar.css"
import React, { useEffect } from 'react'

export default function FeedBar({level}) {

    useEffect(() => {
        const feedbar = document.getElementById("feed-bar")
        feedbar.style = `height: ${level}%`      
    }, [level])

    return (
        <div className='feed-bar-wrapper'>
            <div className='feed-bar' id='feed-bar'></div>
        </div>
        
    )
}
