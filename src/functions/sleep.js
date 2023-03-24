

export default function PetSleeps(){
    let sleep = 50;
    let energy = 100
    let string = 'I want to sleep, I need some rest'
    const Sleep = ()=>{
        return (sleep/100) * 100;
    }
    const SimulateSleep = () =>{
        return energy > 40 ? "I am not tired" : energy < 40 ? energy += sleep : string; 
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