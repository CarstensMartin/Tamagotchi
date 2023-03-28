

 function PetSleeps(){
    let sleep = 50;
    let energy = 100
    let string = 'I want to sleep, I need some rest'
    const Sleep = ()=>{
        return (sleep/100) * 100;
    }
    const SimulateSleep = () =>{
        return energy > 50 ? "I am not tired" : energy < 50 ? energy += sleep : string; 
    }
    const PetSlept = () =>{
        return energy
    }
    const SetPetEnergy = (newEnergy) => {
        energy = newEnergy
    }
    return {
        SimulateSleep,
        Sleep,
        PetSlept,
        SetPetEnergy
    }
}

module.exports = PetSleeps