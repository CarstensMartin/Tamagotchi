const PetFeeds = () => {
  // Declare hunger and make use of catch for ReferenceError when localStorage is not available during testing
  let hunger;

  try {
    hunger = Number(localStorage.getItem("tomagachi-hunger")) || 50;
  } catch (ReferenceError) {
    hunger = 50;
  }

  let feed = 15;
  
  const Feeding = () => {
    return hunger;
  };

  const SimulateFeed = () => {
    return hunger <= 85 ? (hunger += feed) : 100;
  };

  const PetFed = () => {
    return hunger;
  };

  const SimulateTimeFeed = () => {
    return hunger >= 2 ? (hunger -= 2) : 0;
  };

  const SetPetHunger = (newHunger) => {
    hunger = newHunger;
  };

  return {
    Feeding,
    SimulateFeed,
    PetFed,
    SetPetHunger,
    SimulateTimeFeed,
  };
};

module.exports = PetFeeds;
