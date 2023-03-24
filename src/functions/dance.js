const PetDance = () =>{
    let energy = 100;
    let dance = 10;
    let string = 'I want to sleep, I have ran out of energy...'
    const Energy = () =>{
        return (energy/100) * 100;
    };
    const Dance = () => {
        return (dance/100) * 100;
    };
    const SimulateDance = () => {
        return energy > 10 ? energy -= dance : Message();
    }
    const Message = () =>{
        return  energy <= 10 ? string : null;
    }
    const SetPetEnergy = (newEnergy) => {
        energy = newEnergy
    }
    return{
        Energy,
        Dance,
        SimulateDance,
        Message,
        SetPetEnergy
    }
}

module.exports = PetDance