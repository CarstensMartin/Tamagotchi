const PetPlays = () =>{
    let Happy = 15;
    let Play = 10;
    let Hug = 5;
    let energy = 100;
    let string = "I don't want to play"
    const Playing = () =>{
        return (Happy/100) * 100;
    };

    const SimulatePlay = () =>{
        return Happy < 100 ? (Happy += Play , energy -= Play): string 
    };

    const SimulateHug = () =>{
        return Happy < 100 ? Happy += Hug : null;
    }

    const HappyPet = () =>{
        return Happy;
    }

    const Energy = () =>{
        return (energy/100) * 100;
    };

    const SetPetEnergy = (newEnergy) => {
        energy = newEnergy
    }

    const SetPetHappiness = (newHappiness) => {
        Happy = newHappiness
    }

    return {
        Playing,
        SimulatePlay,
        SimulateHug,
        HappyPet,
        SetPetEnergy,
        Energy,
        SetPetHappiness
    }
}

module.exports = PetPlays