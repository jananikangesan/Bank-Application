import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerServiceService } from '../service/customer-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.css'
})
export class FundTransferComponent implements OnInit{

  @ViewChild('myForm') myForm!: NgForm;
  msg?: string;

  constructor(private customerService: CustomerServiceService){}

  ngOnInit(): void {
    this.transferFund;
  }

  transferFund(obj :any){
    const senderUsername=obj.senderUsername;
    const receiverAccount=obj.receiverAccountNumber;
    const amount=obj.amount;
    this.customerService.fundTransfer(senderUsername,receiverAccount,amount).subscribe(data=>{
      this.msg = data;
      console.log(this.msg);
      this.myForm.resetForm();
    },error=>console.log(error))
   
  }

}
