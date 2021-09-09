export class Client {
    ClientCode:number;
    Password: string;
    Name: string;
    Email: string;

    constructor(name: string, password: string, email: string) {
        this.Password = password;
        this.Name = name;
        this.Email = email;
    }

}