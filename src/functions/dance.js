const PetDance = () => {

  let energy;

  try{
    energy = Number(localStorage.getItem("tomagachi-energy")) || 100;
  }catch(ReferenceError){
    energy = 100;
  }


  let dance = 10;
  let string = "I want to sleep, I have ran out of energy...";
  const Energy = () => {
    return energy;
  };
  const Dance = () => {
    return dance;
  };
  const SimulateDance = () => {
    return energy > 10 ? (energy -= dance) : Message();
  };
  const Message = () => {
    if (energy <= 10) {
      return string;
    }
  };
  const SetPetEnergy = (newEnergy) => {
    energy = newEnergy;
  };
  return {
    Energy,
    Dance,
    SimulateDance,
    Message,
    SetPetEnergy,
  };
};

module.exports = PetDance;
