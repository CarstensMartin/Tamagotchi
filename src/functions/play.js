const PetPlays = () => {
  let Happy = Number(localStorage.getItem("tomagachi-happiness")) || 10;
  let Play = 10;
  let Hug = 5;

  let energy = Number(localStorage.getItem("tomagachi-energy")) || 100;

  const Playing = () => {
    return Happy;
  };

  const SimulatePlay = () => {
    return Happy < 100 && energy >= 10
      ? ((Happy += Play), (energy -= Play))
      : "Yey! I am happy you played with me!";
  };

  const SimulateHug = () => {
    return Happy < 100 ? (Happy += Hug) : null;
  };

  const SimulateTimeNotHappy = () => {
    return Happy >= 5 ? (Happy -= 5) : 0;
  };

  const HappyPet = () => {
    return Happy;
  };

  const Energy = () => {
    return energy;
  };

  const SetPetEnergy = (newEnergy) => {
    energy = newEnergy;
  };

  const SetPetHappiness = (newHappiness) => {
    Happy = newHappiness;
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
