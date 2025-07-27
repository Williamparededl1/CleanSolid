(() =>{

type Genders = 'M' | 'F' ;
class Person {
    // public name: string;
    // public gender: Genders;
    // public birthdate: Date;

    // constructor(name: string,gender: Genders, birthdate: Date) {
    //     this.name = name;
    //     this.gender= gender;
    //     this.birthdate = birthdate; 
    // }
    constructor(
        public name: string,
        public gender: Genders, 
        public birthdate: Date) 
    {}
  
}
  const newPerson = new Person('William', 'M', new Date('1995-10-08'));
    console.log({ newPerson });


})();