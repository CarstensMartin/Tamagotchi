import PetDrinks from "../functions/drink";
import assert from "assert";

describe('Testing the Tamogotchi Quenching Thirst', ()=>{
    it('When the Pet is given a drink when Thirst bar is above 90%', ()=>{
        let pet_drink = PetDrinks()
        pet_drink.SimulateDrink()
        assert.equal('I am not thirsty', pet_drink.SimulateDrink())

    });

});