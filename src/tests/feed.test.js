import PetFeeds from "../functions/feed"
import assert from "assert";

describe('Testing the Tamagotchi EAT Routine', ()=>{
    it('When the PET is fed , the HUNGER bar should decrease to 85%', ()=>{
        let pet_eats = PetFeeds()
        pet_eats.SimulateFeed()
        assert.equal(85, pet_eats.PetFed())
    })

    it('When the PET is fed for the second time , the HUNGER bar should decrease to 80%', ()=>{
        let pet_eats = PetFeeds()
        pet_eats.SimulateFeed()
        pet_eats.SimulateFeed()
        assert.equal(80, pet_eats.PetFed())
    })
})