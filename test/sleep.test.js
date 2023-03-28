let assertSleep = require("assert");
let petSleeps = require("../src/functions/sleep");

describe('Testing the Tamagotchi Sleep Routine', ()=>{
    it('When you put the pet to SLEEP at an ENERGY bar above 40%', ()=>{
      let pet_nap = petSleeps();
      pet_nap.SimulateSleep();
      assertSleep.equal('I am not tired', pet_nap.SimulateSleep())
    })
})