(() =>{

type Genders = 'M' | 'F' ;

interface PersonProperties {
    name: string;
    gender: Genders;
    birthdate: Date;
}

class Person {
   
    public name: string;
    public gender: Genders;
    public birthdate: Date;

    constructor({name,gender,birthdate}: PersonProperties) {
        this.name = name;
        this.gender = gender;
        this.birthdate = birthdate;
    }
  
}

interface UserProperties{
    email: string;
    role: string;
    name: string;
    gender : Genders;
    birthdate: Date;
}
 class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

constructor({email,role,name,gender,birthdate}: UserProperties) 
    {
        super({name,gender, birthdate});
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
    }

    checkCredentials() {
        return true;
    }
 }

interface UserSettingsProperties {
    workingDirectory:   string;
    lastOpenFolder:     string;
    email:              string;
    role:               string;
    name:               string;
    gender:             Genders;
    birthdate:          Date;
}
    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
        {workingDirectory,lastOpenFolder,email,role,name,gender,birthdate} : UserSettingsProperties) {

            super({email, role,name,gender, birthdate});
            
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
           
        }
    }

    const userSettings = new UserSettings(
        {
        workingDirectory : '/usr/home',
        lastOpenFolder: '/home',
        email: 'wparedesl1995@gmail.com',
        role: 'Admin',
        name:'William',
        gender :'M',
        birthdate: new Date('1995-03-10')}
        );

    console.log({ userSettings });

})();