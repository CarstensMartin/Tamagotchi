let assert = require("assert");
let PetDrinks = require("../src/functions/drink");

describe('Testing the Tamogotchi Quenching Thirst', ()=>{
    it('When the Pet is given a drink when Thirst bar is above 90%', ()=>{
        let pet_drink = PetDrinks()
        pet_drink.SimulateDrink()
        assert.equal('Thank you, I am not thirsty', pet_drink.SimulateDrink())

    });

});