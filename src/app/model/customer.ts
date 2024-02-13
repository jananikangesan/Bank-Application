export class Customer {
    customerId:number;
    customerName:string;
    customerNumber:number;
    customerUsername:string;
    customerPassword:string;
    customerBalance:number;

    constructor(customerId:number,customerName:string,customerNumber:number,customerUsername:string,customerPassword:string,customerBalance:number){

        this.customerId=customerId;
        this.customerName=customerName;
        this.customerNumber=customerNumber;
        this.customerUsername=customerUsername;
        this.customerPassword=customerPassword;
        this.customerBalance=customerBalance;
    }
}
