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
  setCurrentAudio,
  cvTips,
  showBot,
  setShowBot,
}) {
  title = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;

  const handleButtonClick = () => {
    handleChangeActiveGif(title.toLowerCase());

    switch (title) {
      case "Dance":
        if (petDance.Energy() >= 0) {
          petDance.SimulateDance();
          if (typeof petDance.SimulateDance() === "string") {
            setTextMessage(petDance.SimulateDance());
          } else {
            setEnergy(petDance.SimulateDance());
          }
        }
        setEnergy(petDance.Energy());
        CurrentAudio.pause();
        DanceAudio.play();
        setCurrentAudio(DanceAudio);
        break;

      case "Hug":
        petPlays.SimulateHug();
        setHappiness(petPlays.HappyPet());
        CurrentAudio.pause();
        HugAudio.play();
        setCurrentAudio(HugAudio);
        break;

      case "Feed":
        petFeeds.SimulateFeed();
        if (petFeeds.SimulateFeed() === 100) {
          setTextMessage("Thank you, I am not hungry");
        } else {
          setHunger(petFeeds.SimulateFeed());
        }

        CurrentAudio.pause();
        FeedAudio.play();
        setCurrentAudio(FeedAudio);
        break;

      case "Drink":
        petDrinks.SimulateDrink();

        if (typeof petDrinks.SimulateDrink() === "string") {
          setTextMessage(petDrinks.SimulateDrink());
        } else {
          setThirst(petDrinks.SimulateDrink());
        }

        CurrentAudio.pause();
        DrinkAudio.play();
        setCurrentAudio(DrinkAudio);
        break;

      case "Ask":
        setShowBot(!showBot);
        CurrentAudio.pause();
        AskAudio.play();
        setCurrentAudio(AskAudio);
        break;

      case "Educate":
        setTextMessage(cvTips[Math.floor(Math.random() * 15)]);
        CurrentAudio.pause();
        EducateAudio.play();
        setCurrentAudio(EducateAudio);
        break;

      case "Sleep":
        typeof petSleeps.SimulateSleep() === "string"
          ? setTextMessage(petSleeps.SimulateSleep())
          : setEnergy(petSleeps.PetSlept());

        CurrentAudio.pause();
        SleepSnoring2Audio.play();
        setCurrentAudio(SleepSnoring2Audio);
        break;

      case "Play":
        if (typeof petPlays.SimulatePlay() === "string") {
          setTextMessage(petPlays.SimulatePlay());
        } else {
          setHappiness(petPlays.HappyPet());
          setEnergy(petPlays.Energy());
        }
        CurrentAudio.pause();
        PlayAudio.play();
        setCurrentAudio(PlayAudio);
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
