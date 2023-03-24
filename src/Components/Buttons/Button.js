import React from 'react'
import "./Button.css"

export default function Button({title, handleChangeActiveGif}) {

  title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`

  const handleButtonClick = () => {
    handleChangeActiveGif(title.toLowerCase())
  }

  return (
    <div className='button-wrapper' onClick={handleButtonClick}>
      <span>{title}</span>
    </div>
  )
}
