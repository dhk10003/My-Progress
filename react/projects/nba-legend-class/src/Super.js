// --------------  SUPER ----------------
// Parent class
class Animal {
    constructor(species) {
      this.species = species;
    }
  
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  // Subclass that extends Animal
  class Dog extends Animal {
    constructor(species, breed) {
      super(species); // Calling the constructor of the parent class
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Woof!");
    }
  }
  
  // Create an instance of the Dog class
  const doggo = new Dog("Canine", "Labrador");
  console.log(doggo.species); // Output: "Canine"
  console.log(doggo.breed);   // Output: "Labrador"
  doggo.makeSound();          // Output: "Woof!"