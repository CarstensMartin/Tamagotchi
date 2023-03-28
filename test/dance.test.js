let assertDance = require("assert");
let petDance = require("../src/functions/dance");

describe('Testing the Tamagotchi Dance Moves', () =>{
    it('When the Pet Dances, the ENERGY bar should decrease to 90%', ()=>{
        let pet_moves = petDance();
        pet_moves.SimulateDance();
        assertDance.equal(90, pet_moves.Energy());
    });
    it('When the Pet Dances for the second time, the ENERGY bar should decrease to 80%', ()=>{
        let pet_moves = petDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        assertDance.equal(80, pet_moves.Energy());
    });
    it('When the Pet Dances for the third time, the ENERGY bar should decrease to 70%', ()=>{
        let pet_moves = petDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        assertDance.equal(70, pet_moves.Energy());
    });
    it('When the Pet Dances over 9 times, it should ask to be fed',()=>{
        let pet_moves = petDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        pet_moves.SimulateDance();
        
        assertDance.equal('I want to sleep, I have ran out of energy...', pet_moves.SimulateDance());
    });
});