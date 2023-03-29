const PetDrinks = () => {
  // Declare thirst and make use of catch for ReferenceError when localStorage is not available during testing
  let thirst;

  try {
    thirst = Number(localStorage.getItem("tomagachi-thirst")) || 100;
  } catch (ReferenceError) {
    thirst = 100;
  }

  let drink = 5;

  const Thirsty = () => {
    return thirst;
  };

  const SimulateDrink = () => {
    return thirst <= 90 ? (thirst += drink) : Message();
  };

  const Message = () => {
    return thirst <= 90
      ? "I am Thristy , can I have some Juice"
      : "Thank you, I am not thirsty";
  };

  const SimulateTimeDrink = () => {
    return thirst >= 2 ? (thirst -= 2) : 0;
  };

  const SetPetThirst = (newThirst) => {
    thirst = newThirst;
  };

  return {
    Thirsty,
    Message,
    SimulateDrink,
    SetPetThirst,
    SimulateTimeDrink,
  };
};

module.exports = PetDrinks;
