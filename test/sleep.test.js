let assert = require("assert");
let PetSleeps = require("../src/functions/sleep");

describe('Testing the Tamagotchi Sleep Routine', ()=>{
    it('When you put the pet to SLEEP at an ENERGY bar above 40%', ()=>{
      let pet_nap = PetSleeps();
      pet_nap.SimulateSleep();
      assert.equal('I am not tired', pet_nap.SimulateSleep())
    })
})