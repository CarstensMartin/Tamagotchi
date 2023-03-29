const PetFeeds = () =>{

    let Hunger = Number(localStorage.getItem('tomagachi-hunger')) || 50;

    let Feed = 15;
    const Feeding = () =>{
        return Hunger;
    }

    const SimulateFeed = () =>{
        return Hunger <= 85 ? Hunger += Feed : 100;
    }

    const PetFed = () =>{
        return Hunger;
    }

    const SimulateTimeFeed = () =>{
        return( Hunger >= 2) ? (Hunger -= 2) : 0;
    }

    const SetPetHunger = (newHunger) => {
        Hunger = newHunger
    }

    return {
        Feeding,
        SimulateFeed,
        PetFed,
        SetPetHunger,
        SimulateTimeFeed
    }
}

module.exports = PetFeeds