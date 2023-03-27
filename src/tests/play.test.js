import assert from "assert";
import PetPlays from "../functions/play";

describe('Testing the Tamagotchi Play & Hugging Routine', () =>{
    
    it('When the Pet HUGS The HAPPINESS bar should increase to 20%', ()=>{
        let pet_plays = PetPlays();
        pet_plays.SimulateHug();
        assert.equal(20, pet_plays.HappyPet())
    });

    it('When the Pet HUGS for the second time; The HAPPINESS bar should increase to 25%', ()=>{
        let pet_plays = PetPlays();
        pet_plays.SimulateHug();
        pet_plays.SimulateHug();
        assert.equal(25, pet_plays.HappyPet())
    });
    
    it('When the Pet PLAYS The HAPPINESS bar should increase to 25%', ()=>{
        let pet_plays = PetPlays();
        pet_plays.SimulatePlay();
        assert.equal(25, pet_plays.HappyPet())

    });

    it('When the Pet PLAYS for the second time; The HAPPINESS bar should increase to 35%', ()=>{
        let pet_plays = PetPlays();
        pet_plays.SimulatePlay();
        pet_plays.SimulatePlay();
        assert.equal(35, pet_plays.HappyPet())

    });

});