const PetFeeds = () =>{
    let Hunger = 0;
    let Feed = 5;
    let string = 'Thank you, I am not hungry';
    const Feeding = () =>{
        return (Hunger/100) * 100;
    }

    const SimulateFeed = () =>{
        return (Hunger <= 95 && Hunger >= 0) ? Hunger += Feed : string
    }

    const PetFed = () =>{
        return Hunger;
    }

    const SetPetHunger = (newHunger) => {
        Hunger = newHunger
    }

    return {
        Feeding,
        SimulateFeed,
        PetFed,
        SetPetHunger
    }
}

module.exports = PetFeeds