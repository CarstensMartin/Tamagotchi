let assertFeed = require("assert");
let petFeeds = require("../src/functions/feed");

describe('Testing the Tamagotchi EAT Routine', ()=>{
    it('When the PET is fed , the HUNGER bar should increase to 5%', ()=>{
        let pet_eats = petFeeds()
        pet_eats.SimulateFeed()
        assertFeed.equal(5, pet_eats.PetFed())
    })

    it('When the PET is fed for the second time , the HUNGER bar should increase to 10%', ()=>{
        let pet_eats = petFeeds()
        pet_eats.SimulateFeed()
        pet_eats.SimulateFeed()
        assertFeed.equal(10, pet_eats.PetFed())
    })
})