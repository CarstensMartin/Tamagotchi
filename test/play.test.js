let assertPlay = require("assert");
let petPlays = require("../src/functions/play");

describe('Testing the Tamagotchi Play & Hugging Routine', () =>{
    
    it('When the Pet HUGS The HAPPINESS bar should increase to 15%', ()=>{
        let pet_plays = petPlays();
        pet_plays.SimulateHug();
        assertPlay.equal(15, pet_plays.HappyPet())
    });

    it('When the Pet HUGS for the second time; The HAPPINESS bar should increase to 20%', ()=>{
        let pet_plays = petPlays();
        pet_plays.SimulateHug();
        pet_plays.SimulateHug();
        assertPlay.equal(20, pet_plays.HappyPet())
    });
    
    it('When the Pet PLAYS The HAPPINESS bar should increase to 20%', ()=>{
        let pet_plays = petPlays();
        pet_plays.SimulatePlay();
        assertPlay.equal(20, pet_plays.HappyPet())

    });

    it('When the Pet PLAYS for the second time; The HAPPINESS bar should increase to 30%', ()=>{
        let pet_plays = petPlays();
        pet_plays.SimulatePlay();
        pet_plays.SimulatePlay();
        assertPlay.equal(30, pet_plays.HappyPet())

    });

});