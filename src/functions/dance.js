const PetDance = () => {
  // Declare energy and make use of catch for ReferenceError when localStorage is not available during testing
  let energy;
  try {
    energy = Number(localStorage.getItem("tomagachi-energy")) || 100;
  } catch (ReferenceError) {
    energy = 100;
  }

  let dance = 10;

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
      return "I want to sleep, I have ran out of energy...";
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
