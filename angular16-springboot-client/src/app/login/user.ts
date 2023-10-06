export class User {
  id: number;
  name: string;
  password: string;
  emailId: string;
  roles: string;

  constructor(id:number,name:string,password:string,emailId:string,roles:string){
    this.id=id;
    this.roles=roles;
    this.emailId=emailId;
    this.name=name;
    this.password=password;
  }
}
