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
  const [active_gif, setActive_gif] = useState(gifs[player.type]?.start || gifs.egg.unhatched)
  const [textMessage, setTextMessage] = useState("")

  const stats = {
    Hunger: {
      level: 10
    },
    Thirst: {
      level: 50
    },
    Happiness: {
      level: 90
    },
    Energy: {
      level: 40
    },
  }

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
              return <Button key={key} title={key} handleChangeActiveGif={handleChangeActiveGif} />
            })}
          </div>
        </>

      }

    </div>
  );
}

export default Tomagachi;
