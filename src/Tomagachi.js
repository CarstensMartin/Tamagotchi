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
import startLowHealthPandaGIF from "./gifs/Panda/StartLowHealth.gif"
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
import startLowHealthBunnyGIF from "./gifs/Bunny/StartLowHealth.gif"

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
import startLowHealthUnicornGIF from "./gifs/Unicorn/StartLowHealth.gif"

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
  const [active_gif, setActive_gif] = useState(gifs[player.type]?.start || gifs.egg.unhatched)
  const [textMessage, setTextMessage] = useState("")
  const [hunger, thirst, happiness, energy, setHunger, setThirst, setHappiness, setEnergy] = useSemiPersistentStateForStats()

  

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

  useEffect(() => {

  }, [])

  useEffect(() => {
    const img = document.querySelector('#tomagachi-gif')
    img.ondragstart = () => {
      return false;
    };
  }, [])

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
                          />
            })}
          </div>
        </>

      }

    </div>
  );
}

export default Tomagachi;
