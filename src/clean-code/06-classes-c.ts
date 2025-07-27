(() =>{

    //aplicando el  principio de responsabilidad única
    //priorizar la composición sobre la herencia

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
}
 class User  {
    public email: string;
    public role: string;
    public lastAccess: Date;

constructor({email,role}: UserProperties) 
    {
    
        this.email = email;
        this.role = role;
        this.lastAccess = new Date();
    }

    checkCredentials() {
        return true;
    }
 }

interface SettingsProperties {
    workingDirectory:   string;
    lastOpenFolder:     string;
}
    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
        {workingDirectory,lastOpenFolder} : SettingsProperties) {

            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
           
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,gender,birthdate,
            role,email,
            workingDirectory,lastOpenFolder
        }:UserSettingsProperties

        ) {
            this.person = new Person({name,gender,birthdate});
            this.user = new User({email,role});
            this.settings = new Settings({workingDirectory,lastOpenFolder});
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