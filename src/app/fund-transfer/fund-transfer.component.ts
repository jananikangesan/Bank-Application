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

  senderAccount:number=0;
  receiverAccount:number=0;
  amount:number=0;

  constructor(private customerService: CustomerServiceService){}

  ngOnInit(): void {
    this.transferFund;
  }

  transferFund(obj :any){
    this.senderAccount=obj.senderAcountNumber;
    this.receiverAccount=obj.receiverAccountNumber;
    this.amount=obj.amount;
    this.customerService.fundTransfer(this.senderAccount,this.receiverAccount,this.amount).subscribe(data=>{
      this.msg = 'fund Transfered successfully.';
      alert(this.msg);
      console.log(this.msg);
    },error=>console.log(error))
   this.myForm.resetForm();
  }
}
