(() =>{

type Genders = 'M' | 'F' ;
class Person {
   
    constructor(
        public name: string,
        public gender: Genders, 
        public birthdate: Date) 
    {}
  
}
 class User extends Person {
    public lastAccess: Date;
    constructor(
        public email: string,
        public role: string,
        name: string,
        gender: Genders,
        birthdate: Date
        )
    {
       super(name,gender, birthdate);
        this.lastAccess = new Date();
    }

    checkCredentials() {
        return true;
    }
 }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Genders,
            birthdate: Date
        ) {
            super(email, role, name,gender, birthdate);
           
        }
    }
    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'wparedesl1995@gmail.com'
        ,'Admin',
        'William',
        'M',
        new Date('1995-03-10')
        );

    console.log({ userSettings });

})();