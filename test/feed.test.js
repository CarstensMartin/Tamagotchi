let assertFeed = require("assert");
let petFeeds = require("../src/functions/feed");

describe('Testing the Tamagotchi EAT Routine', ()=>{
    it('When the PET is fed , the HUNGER bar should increase to 15% from 50% to 65%', ()=>{
        let pet_eats = petFeeds()
        pet_eats.SimulateFeed()
        assertFeed.equal(65, pet_eats.PetFed())
    })

    it('When the PET is fed for the second time , the HUNGER bar should increase to 30% from 50% to 80%', ()=>{
        let pet_eats = petFeeds()
        pet_eats.SimulateFeed()
        pet_eats.SimulateFeed()
        assertFeed.equal(80, pet_eats.PetFed())
    })
})