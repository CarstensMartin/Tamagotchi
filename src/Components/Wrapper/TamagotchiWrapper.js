import React, { useEffect, useState } from "react";
import "./TamagotchiWrapper.css";
import Bubble from "../../images/Bubble.png";
import BunnyPlayer from "../../images/Players/Bunny.png";
import PandaPlayer from "../../images/Players/Panda.png";
import UnicornPlayer from "../../images/Players/Unicorn.png";

export default function TamagotchiWrapper({
    gif,
    handleGrowth,
    handlePlayerSelector,
    isYoung,
    textMessage,
    name,
    setTextMessage,
}) {
    const [displayMessageNo, setDisplayMessageNo] = useState(0);
    const [tempName, setTempName] = useState("");

    const players = {
        Bunny: BunnyPlayer,
        Panda: PandaPlayer,
        Unicorn: UnicornPlayer,
    };

    const handlePlayerName = (e) => {
        setTempName(e.target.value);
    };

    useEffect(() => {
        if (gif.includes("Start")) {
            setTextMessage(`Hi I am ${name}, I am a cyber creature who has traveled million of miles from my home planet
            to learn what life is like on planet earth`);
        } else {
            try {
                setTextMessage("");
            } catch (TypeError) { }
        }
    }, [gif]);

    return (
        <div className="component-wrapper">
            {isYoung || textMessage ? (
                <div className="component-wrapper__text-display">
                    <img src={Bubble} alt="pic" />
                    <div className="component-wrapper__text-display__text-wrapper">
                        {textMessage ? (
                            textMessage
                        ) : gif.includes("Egg-Hatched") ? (
                            displayMessageNo === 0 ? (
                                <>
                                    <div>
                                        Hello!. I am your digital friend. I grow as your career
                                        grows 🐣 I am here to keep you company. You can play with me
                                        by clicking and dragging.
                                    </div>
                                    <div>
                                        <span
                                            className="component-wrapper__text-display__text-wrapper__name-me"
                                            onClick={() => {
                                                setDisplayMessageNo(1);
                                            }}
                                        >
                                            Click here to name
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>Give me a name</div>
                                    <div>
                                        <input
                                            type="text"
                                            className="component-wrapper__text-display__text-wrapper--input"
                                            onChange={handlePlayerName}
                                        />
                                    </div>
                                    <div>Dress me</div>
                                    <div className="tomagachi-player-selector-wrapper">
                                        {Object.values(players).map((value, i) => (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    handlePlayerSelector(
                                                        Object.keys(players)[i],
                                                        tempName
                                                    );
                                                }}
                                            >
                                                <img
                                                    className="tomagachi-player-img"
                                                    src={value}
                                                    alt="pic"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )
                        ) : (
                            <span>
                                Hi there
                                <br />
                                <br />
                                Click on Me
                            </span>
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
            <img id="tomagachi-gif" alt="gif" src={gif} onClick={handleGrowth} />
        </div>
    );
}
