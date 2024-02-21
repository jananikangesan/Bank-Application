import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerServiceService } from '../service/customer-service.service';
import { NgForm } from '@angular/forms';
import { ApiResponse } from '../model/api-response';
import { clearScreenDown } from 'readline';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.css'
})
export class FundTransferComponent implements OnInit{

  @ViewChild('myForm') myForm!: NgForm;
  msg?: ApiResponse; // Use the ApiResponse interface here

  //flag:boolean=false;
 // flagMsg: boolean=false;
 // flagError: boolean=false;

  constructor(private customerService: CustomerServiceService){}

  ngOnInit(): void {
    this.transferFund;
  }

  transferFund() {
    const obj = this.myForm.value;
    const senderUsername = obj.senderUsername;
    const receiverAccount = obj.receiverAccountNumber;
    const amount = obj.amount;
    
    this.customerService.fundTransfer(senderUsername, receiverAccount, amount).subscribe(
      (data: any) => { // Correct subscription syntax
        this.msg = data; // Assign response directly
        console.log(this.msg);
        //this.flagMsg = true;
        //this.flag = true;
        this.myForm.resetForm();
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: this.msg?.message , // Assuming the message is stored in msg.message
        });
      },
      error => {
        console.log(error);
        this.msg = error; // Assign error directly
       // this.flagError = true;
        //this.flag = true;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.msg?.error?.message || 'An error occurred!', // Assuming the error message is stored in msg.error.message
        });
      }
    );
}

}
