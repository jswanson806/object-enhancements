// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     };

// ES2015 version

    // function createInstructor(firstName, lastName){
    //     return {
    //         firstName,
    //         lastName
    //     };
    // };

//computed property names
    // var favoriteNumber = 42;

    // var instructor = {
    //   firstName: "Colt"
    // }
        
    // instructor[favoriteNumber] = "That is my favorite!"

// ES2015  version

    // let favoriteNumber = 42;
    // let firstName = "Colt";
    // let instructor = {
    //     [firstName] : firstName,
    //     [favoriteNumber] : "That is my favorite!"
    // };
  
//Object Methods
    // var instructor = {
    //     firstName: "Colt",
    //     sayHi: function(){
    //     return "Hi!";
    //     },
    //     sayBye: function(){
    //     return this.firstName + " says bye!";
    //     }
    // }

// ES2015 version
    // const instructor = {
    //     firstName: "Colt",
    //     sayHi(){
    //     return "Hi!";
    //     },
    //     sayBye(){
    //     return this.firstName + " says bye!";
    //     }
    // };

//createAnimal function
    // function createAnimal(species, verb, noise){
    //        const animal = {species,
    //         verb,
    //         noise,
    //         [verb](){
    //             return noise;
    //         }
    //     };
    //     return animal;
    // };