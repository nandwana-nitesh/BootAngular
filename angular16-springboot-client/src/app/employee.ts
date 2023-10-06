export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  active: boolean;

  constructor(id:number,firstName:string,lastName:string,emailId:string,active:boolean){
    this.id=id;
    this.active=active;
    this.emailId=emailId;
    this.firstName=firstName;
    this.lastName=lastName;
  }
}
