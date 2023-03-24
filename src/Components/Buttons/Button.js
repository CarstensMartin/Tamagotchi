import React from "react";
import "./Button.css";

export default function Button({
  title,
  handleChangeActiveGif,
  petDance,
  petDrinks,
  petFeeds,
  petPlays,
  petSleeps,
  setEnergy,
  setHappiness,
  setHunger,
  setThirst,
  setTextMessage,
}) {
  title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;

  const handleButtonClick = () => {
    handleChangeActiveGif(title.toLowerCase());

    switch (title) {
      case "Dance":
        petDance.SimulateDance();
        setEnergy(petDance.Energy())
        break;

      case "Hug":
        petPlays.SimulateHug()
        setHappiness(petPlays.HappyPet())
        break;

      case "Feed":
        petFeeds.SimulateFeed()
        setHunger(petFeeds.PetFed())
        break;

      case "Drink":
        petDrinks.SimulateDrink()
        setThirst(petDrinks.Thirsty())
        break;

      case "Ask":
        break;

      case "Educate":
        break;

      case "Sleep":
        (typeof petSleeps.SimulateSleep() === "string") ? 
        setTextMessage(petSleeps.SimulateSleep())
        : setEnergy(petSleeps.PetSlept())

        break;

      case "Play":
        if (typeof petPlays.SimulatePlay() === "string"){
          setTextMessage(petPlays.SimulatePlay())
        }  
        else{
          setHappiness(petPlays.HappyPet())
          setEnergy(petPlays.Energy())
        }
        
        break;

      default:
    }
  };

  return (
    <div className="button-wrapper" onClick={handleButtonClick}>
      <span>{title}</span>
    </div>
  );
}
