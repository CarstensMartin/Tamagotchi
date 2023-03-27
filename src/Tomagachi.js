import './Tomagachi.css';
import TomagachiWrapper from './Components/Wrapper/TomagachiWrapper'

//Panda
import drinkPandaGIF from "./gifs/Panda/Drink.gif"
import askPandaGIF from "./gifs/Panda/Ask.gif"
import feedPandaGIF from "./gifs/Panda/Feed.gif"
import hugPandaGIF from "./gifs/Panda/Hug.gif"
import sleepPandaGIF from "./gifs/Panda/Sleep.gif"
import dancekPandaGIF from "./gifs/Panda/Dance.gif"
import educatePandaGIF from "./gifs/Panda/Educate.gif"
import startPandaGIF from "./gifs/Panda/Start.gif"
import startLowHealthPandaGIF from "./gifs/Panda/Low.gif"
import playPandaGIF from "./gifs/Panda/Play.gif"

//Bunny
import drinkBunnyGIF from "./gifs/Bunny/Drink.gif"
import askBunnyGIF from "./gifs/Bunny/Ask.gif"
import feedBunnyGIF from "./gifs/Bunny/Feed.gif"
import hugBunnyGIF from "./gifs/Bunny/Hug.gif"
import sleepBunnyGIF from "./gifs/Bunny/Sleep.gif"
import dancekBunnyGIF from "./gifs/Bunny/Dance.gif"
import educateBunnyGIF from "./gifs/Bunny/Educate.gif"
import startBunnyGIF from "./gifs/Bunny/Start.gif"
import playBunnyGIF from "./gifs/Bunny/Play.gif"
import startLowHealthBunnyGIF from "./gifs/Bunny/Low.gif"

//Unicorn
import drinkUnicornGIF from "./gifs/Unicorn/Drink.gif"
import askUnicornGIF from "./gifs/Unicorn/Ask.gif"
import feedUnicornGIF from "./gifs/Unicorn/Feed.gif"
import hugUnicornGIF from "./gifs/Unicorn/Hug.gif"
import sleepUnicornGIF from "./gifs/Unicorn/Sleep.gif"
import dancekUnicornGIF from "./gifs/Unicorn/Dance.gif"
import educateUnicornGIF from "./gifs/Unicorn/Educate.gif"
import startUnicornGIF from "./gifs/Unicorn/Start.gif"
import playUnicornGIF from "./gifs/Unicorn/Play.gif"
import startLowHealthUnicornGIF from "./gifs/Unicorn/Low.gif"

//Audios
import AskMp3 from './Audios/Effects/Ask.mp3'
import DanceMp3 from './Audios/Effects/Dance.mp3'
import DrinkMp3 from './Audios/Effects/Drink.mp3'
import EducateMp3 from './Audios/Effects/Educate.mp3'
import FeedMp3 from './Audios/Effects/Feed.mp3'
import HugMp3 from './Audios/Effects/Hug.mp3'
import PlayMp3 from './Audios/Effects/Play.mp3'
import SleepSnoring2Mp3 from './Audios/Effects/Sleep-Snoring2.mp3'

import eggGIF from "./gifs/Egg/Egg.gif"
import eggHatchedGIF from "./gifs/Egg/Egg-Hatched.gif"
import eggHatchingGIF from "./gifs/Egg/Egg-Hatching.gif"
import { useEffect, useState } from 'react';
import StatLevel from './Components/StatLevel/StatLevel';
import Button from './Components/Buttons/Button';

//Factory functions
import PetDance from "./functions/dance";
import PetDrinks from "./functions/drink";
import PetFeeds from "./functions/feed";
import PetPlays from "./functions/play";
import PetSleeps from "./functions/sleep.js";

let petDance = PetDance()
let petDrinks = PetDrinks()
let petFeeds = PetFeeds()
let petPlays = PetPlays()
let petSleeps = PetSleeps()

let AskAudio = new Audio(AskMp3)
let DanceAudio = new Audio(DanceMp3)
let DrinkAudio = new Audio(DrinkMp3)
let EducateAudio = new Audio(EducateMp3)
let FeedAudio = new Audio(FeedMp3)
let HugAudio = new Audio(HugMp3)
let PlayAudio = new Audio(PlayMp3)
let SleepSnoring2Audio = new Audio(SleepSnoring2Mp3)

const useSemiPersistentStateForStats = () => {
  const [hunger, setHunger] = useState( JSON.parse(localStorage.getItem('tomagachi-hunger')) || petFeeds.PetFed() )
  const [thirst, setThirst] = useState( JSON.parse(localStorage.getItem('tomagachi-thirst')) || petDrinks.Thirsty())
  const [happiness, setHappiness] = useState( JSON.parse(localStorage.getItem('tomagachi-happiness')) || petPlays.HappyPet())
  const [energy, setEnergy] = useState( JSON.parse(localStorage.getItem('tomagachi-energy')) || petDance.Energy())

  useEffect(() => {
    localStorage.setItem('tomagachi-hunger', JSON.stringify(hunger));
    petFeeds.SetPetHunger(hunger)
  }, [hunger]);

  useEffect(() => {
    localStorage.setItem('tomagachi-thirst', JSON.stringify(thirst));
    petDrinks.SetPetThirst(thirst)
  }, [thirst]);

  useEffect(() => {
    localStorage.setItem('tomagachi-happiness', JSON.stringify(happiness));
    petPlays.SetPetHappiness(happiness)
  }, [happiness]);

  useEffect(() => {
    localStorage.setItem('tomagachi-energy', JSON.stringify(energy));
    petSleeps.SetPetEnergy(energy)
    petDance.SetPetEnergy(energy)
    petPlays.SetPetEnergy(energy)
  }, [energy]);

  return [hunger, thirst, happiness, energy, setHunger, setThirst, setHappiness, setEnergy]

}

function Tomagachi() {

  const useSemiPersistentState = () => {
    const [player, setPlayer] = useState(
      JSON.parse(localStorage.getItem('tomagachi')) || {name: "", type: "", isYoung: true}
    );
   
    useEffect(() => {
      localStorage.setItem('tomagachi', JSON.stringify(player));
    }, [player]);

    return [player, setPlayer];
  }
 
  

  const gifs = {
    egg: {
      unhatched: eggGIF,
      hatched: eggHatchedGIF,
      hatching: eggHatchingGIF,
    },
    Panda: {
      dance: dancekPandaGIF,
      hug: hugPandaGIF,
      feed: feedPandaGIF,
      drink: drinkPandaGIF,
      ask: askPandaGIF,
      educate: educatePandaGIF,
      sleep: sleepPandaGIF,
      start: startPandaGIF,
      play: playPandaGIF,
      startLow: startLowHealthPandaGIF
    },
    Bunny: {
      dance: dancekBunnyGIF,
      hug: hugBunnyGIF,
      feed: feedBunnyGIF,
      drink: drinkBunnyGIF,
      ask: askBunnyGIF,
      educate: educateBunnyGIF,
      sleep: sleepBunnyGIF,
      start: startBunnyGIF,
      play: playBunnyGIF,
      startLow: startLowHealthBunnyGIF
    },
    Unicorn: {
      dance: dancekUnicornGIF,
      hug: hugUnicornGIF,
      feed: feedUnicornGIF,
      drink: drinkUnicornGIF,
      ask: askUnicornGIF,
      educate: educateUnicornGIF,
      sleep: sleepUnicornGIF,
      start: startUnicornGIF,
      play: playUnicornGIF,
      startLow: startLowHealthUnicornGIF
    }
  }

  const [player, setPlayer] = useSemiPersistentState()
  let [active_gif, setActive_gif] = useState(gifs[player.type]?.start || gifs.egg.unhatched)
  const [textMessage, setTextMessage] = useState("")
  const [hunger, thirst, happiness, energy, setHunger, setThirst, setHappiness, setEnergy] = useSemiPersistentStateForStats()
  const [CurrentAudio, setCurrentAudio] = useState(new Audio())

 

  const stats = {
    Hunger: {
      level: hunger
    },
    Thirst: {
      level: thirst
    },
    Happiness: {
      level: happiness
    },
    Energy: {
      level: energy
    },
  }

  const cvTips = [
    "Tailor your CV to the position that you are applying for.",
    "Choose the correct CV format for the position.",
    "Create a neat and tidy CV layout.",
    "Use the right CV length, generally 1 to 2 pages.",
    "Don't include unnecessary information in your CV.",
    "Make a CV header that stands out.",
    "Use a sensible email address based on your name, funny and quirky addresses are not advised for the job market.",
    "Include a clickable URL with your LinkedIn profile and other social media handles.",
    "Have a compelling about section that summarises you in 3 to 5 lines.",
    "Perfect your work experience section with result-driven outcomes.",
    "Remember to include a section for your education.",
    "Leverage your skills section. Make sure you match your own skill set to the job description.",
    "Save your CV in the right format.",
    "Thoroughly proofread your CV and make use of tools like Grammarly.",
    "Write a cover letter to accompany your CV."
  ]
  
  let myIntervalHunger = setInterval(() => {
    if(stats.Hunger.level > 0){
        setHunger(stats.Hunger.level -= 5);
      }
      else{
        clearInterval(myIntervalHunger)
      }
  }, 60000)

  let myIntervalThirst = setInterval(() => {
    if(stats.Thirst.level > 0){
        setThirst(stats.Thirst.level -= 5);
      }
      else{
        clearInterval(myIntervalThirst)
      }
  }, 60000)

  let myIntervalHappiness = setInterval(() => {
    if(stats.Happiness.level > 0){
        setHappiness(stats.Happiness.level -= 5);
      }
      else{
        clearInterval(myIntervalHappiness)
      }
  }, 120000)

  useEffect(() => {
    const img = document.querySelector('#tomagachi-gif')
    img.ondragstart = () => {
      return false;
    };
  }, [])

    if ((stats.Hunger.level <= 0 || stats.Thirst.level <= 0 || stats.Happiness.level <= 0 || stats.Energy.level <= 0)&& player.type.length >0 ){
    console.log(active_gif)

    active_gif =(gifs[player.type].startLow);

    }

  const handleGrowth = () => {
    if (active_gif === gifs.egg.unhatched) {
      setActive_gif(gifs.egg.hatching)
    }
    else if (active_gif === gifs.egg.hatching) {
      setActive_gif(gifs.egg.hatched)
    }
  }

  const handleChangeActiveGif = (name) => {
    switch (name) {
      case "dance":
        setActive_gif(gifs[player.type].dance)
        break;

      case "hug":
        setActive_gif(gifs[player.type].hug)
        break;

      case "feed":
        setActive_gif(gifs[player.type].feed)
        break;

      case "drink":
        setActive_gif(gifs[player.type].drink)
        break;

      case "ask":
        setActive_gif(gifs[player.type].ask)
        break;

      case "educate":
        setActive_gif(gifs[player.type].educate)
        break;

      case "sleep":
        setActive_gif(gifs[player.type].sleep)
        break;

      case "play":
        setActive_gif(gifs[player.type].play)
        break;
  
      default:
        setActive_gif(gifs[player.type].sleep)
        break;
    }
  }

  const handlePlayerSelector = (type, playerName) => {
    console.log(type)
    if (type !== player.type && playerName !== "") {
      setActive_gif(gifs[type].start)
      setPlayer({name: playerName, type: type, isYoung: false}) 
    }
    else{
      alert("Give me a name!!!")
    }
  }

  return (
    <div className="Tomagachi-wrapper">
      {(player.isYoung || player.name==="") ?
        <>
          <TomagachiWrapper
            gif={active_gif}
            handleGrowth={handleGrowth}
            handlePlayerSelector={handlePlayerSelector}
            isYoung={player.isYoung}
          />
        </>
        :
        <>
          <div className='stat-level-wrapper'>
            {Object.keys(stats).map((key) => (
              <StatLevel key={key} title={key} level={stats[key].level} />
            ))} 
          </div>
          
          <TomagachiWrapper 
            gif={active_gif} 
            isYoung={player.isYoung}
            textMessage={textMessage}
            setTextMessage={setTextMessage}
            name={player.name}
          />

          <div className='buttons'>
            {Object.keys(gifs[player.type]).map((key) => {
              if (key === "egg" || key === "eggHatched" || key === "eggHatching" || key === "start" || key === "startLow") return ""
              return <Button 
                          key={key} 
                          title={key} 
                          handleChangeActiveGif={handleChangeActiveGif} 
                          petDance={petDance}
                          petDrinks={petDrinks}
                          petFeeds={petFeeds}
                          petPlays={petPlays}
                          petSleeps={petSleeps}
                          setEnergy={setEnergy}
                          setHappiness={setHappiness}
                          setHunger={setHunger}
                          setThirst={setThirst}
                          setTextMessage={setTextMessage}
                          AskAudio={AskAudio}
                          DanceAudio={DanceAudio}
                          HugAudio={HugAudio}
                          FeedAudio={FeedAudio}
                          DrinkAudio={DrinkAudio}
                          EducateAudio={EducateAudio}
                          SleepSnoring2Audio={SleepSnoring2Audio}
                          PlayAudio={PlayAudio}
                          CurrentAudio={CurrentAudio}
                          setCurrentAudio={setCurrentAudio}
                          cvTips={cvTips}
                          />
            })}
          </div>
        </>

      }

    </div>
  );
}

export default Tomagachi;
