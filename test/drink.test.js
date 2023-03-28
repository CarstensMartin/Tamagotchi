let assertDrink = require("assert");
let petDrinks = require("../src/functions/drink");

describe('Testing the Tamogotchi Quenching Thirst', ()=>{
    it('When the Pet is given a drink when Thirst bar is above 90%', ()=>{
        let pet_drink = petDrinks()
        pet_drink.SimulateDrink()
        assertDrink.equal('Thank you, I am not thirsty', pet_drink.SimulateDrink())

    });

});