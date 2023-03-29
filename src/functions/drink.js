const PetDrinks = () => {

 let Thirst; 



  try{
    Thirst = Number(localStorage.getItem("tomagachi-thirst")) || 100;
  }catch(ReferenceError){
    Thirst = 100;
  }



  let drink = 5;

  const Thirsty = () => {
    return Thirst;
  };

  const SimulateDrink = () => {
    return Thirst <= 90 ? (Thirst += drink) : Message();
  };

  const Message = () => {
    return Thirst <= 90
      ? "I am Thristy , can I have some Juice"
      : "Thank you, I am not thirsty";
  };

  const SimulateTimeDrink = () => {
    return Thirst >= 2 ? (Thirst -= 2) : 0;
  };

  const SetPetThirst = (newThirst) => {
    Thirst = newThirst;
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
