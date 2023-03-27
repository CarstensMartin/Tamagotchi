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
  AskAudio,
  DanceAudio,
  FeedAudio,
  DrinkAudio,
  EducateAudio,
  SleepSnoring2Audio,
  PlayAudio,
  HugAudio,
  CurrentAudio,
  setCurrentAudio
}) {
  title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;

  const handleButtonClick = () => {
    handleChangeActiveGif(title.toLowerCase());

    switch (title) {
      case "Dance":
        petDance.SimulateDance();
        setEnergy(petDance.Energy())
        CurrentAudio.pause()
        DanceAudio.play()
        setCurrentAudio(DanceAudio)
        break;

      case "Hug":
        petPlays.SimulateHug()
        setHappiness(petPlays.HappyPet())
        CurrentAudio.pause()
        HugAudio.play()
        setCurrentAudio(HugAudio)
        break;

      case "Feed":
        petFeeds.SimulateFeed()
        setHunger(petFeeds.PetFed())
        CurrentAudio.pause()
        FeedAudio.play()
        setCurrentAudio(FeedAudio)
        break;

      case "Drink":
        petDrinks.SimulateDrink()
        setThirst(petDrinks.Thirsty())
        CurrentAudio.pause()
        DrinkAudio.play()
        setCurrentAudio(DrinkAudio)
        break;

      case "Ask":

        CurrentAudio.pause()
        AskAudio.play()
        setCurrentAudio(AskAudio)
        break;

      case "Educate":

        CurrentAudio.pause()
        EducateAudio.play()
        setCurrentAudio(EducateAudio)
        break;

      case "Sleep":
        (typeof petSleeps.SimulateSleep() === "string") ? 
        setTextMessage(petSleeps.SimulateSleep())
        : setEnergy(petSleeps.PetSlept())

        CurrentAudio.pause()
        SleepSnoring2Audio.play()
        setCurrentAudio(SleepSnoring2Audio)
        break;

      case "Play":
        if (typeof petPlays.SimulatePlay() === "string"){
          setTextMessage(petPlays.SimulatePlay())
        }  
        else{
          setHappiness(petPlays.HappyPet())
          setEnergy(petPlays.Energy())
        }
        CurrentAudio.pause()
        PlayAudio.play()
        setCurrentAudio(PlayAudio)
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
