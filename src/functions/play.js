const PetPlays = () => {
  // Declare variables and make use of catch for ReferenceError when localStorage is not available during testing
  let happy;
  let energy;

  try {
    happy = Number(localStorage.getItem("tomagachi-happiness")) || 10;
  } catch (ReferenceError) {
    happy = 10;
  }

  try {
    energy = Number(localStorage.getItem("tomagachi-energy")) || 100;
  } catch (ReferenceError) {
    energy = 100;
  }

  let play = 10;
  let Hug = 5;

  const Playing = () => {
    return happy;
  };

  const SimulatePlay = () => {
    return happy < 100 && energy >= 10
      ? ((happy += play), (energy -= play))
      : "Yey! I am happy you played with me!";
  };

  const SimulateHug = () => {
    return happy < 100 ? (happy += Hug) : null;
  };

  const SimulateTimeNotHappy = () => {
    return happy >= 5 ? (happy -= 5) : 0;
  };

  const HappyPet = () => {
    return happy;
  };

  const Energy = () => {
    if (energy < 10) {
      return 0;
    } else {
      return energy;
    }
  };

  const SetPetEnergy = (newEnergy) => {
    energy = newEnergy;
  };

  const SetPetHappiness = (newHappiness) => {
    happy = newHappiness;
  };

  return {
    Playing,
    SimulatePlay,
    SimulateHug,
    HappyPet,
    SetPetEnergy,
    Energy,
    SetPetHappiness,
    SimulateTimeNotHappy,
  };
};

module.exports = PetPlays;
