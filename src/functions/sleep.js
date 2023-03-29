function PetSleeps() {
  let sleep = 25;

  let energy; 

  try{
    energy = Number(localStorage.getItem("tomagachi-energy")) || 100;
  }catch(ReferenceError){
    energy = 100;
  }


  const Sleep = () => {
    return sleep;
  };
  const SimulateSleep = () => {
    return energy > 70
      ? "I am not tired"
      : energy < 70
      ? (energy += sleep)
      : "I want to sleep, I need some rest";
  };
  const PetSlept = () => {
    return energy;
  };
  const SetPetEnergy = (newEnergy) => {
    energy = newEnergy;
  };
  return {
    SimulateSleep,
    Sleep,
    PetSlept,
    SetPetEnergy,
  };
}

module.exports = PetSleeps;
