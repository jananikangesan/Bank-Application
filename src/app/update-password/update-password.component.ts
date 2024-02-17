import { Component, Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerServiceService } from '../service/customer-service.service';
import { ApiResponse } from '../model/api-response';



@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent implements OnInit{

  @ViewChild('myForm') myForm!: NgForm;
  msg?: ApiResponse; // Use the ApiResponse interface here

  flag:boolean=false;
  flagMsg: boolean=false;
  flagError: boolean=false;

  constructor(private customerService: CustomerServiceService){}


  ngOnInit(): void {
   this.updatePassword;
  }
  
  updatePassword() {
    const obj = this.myForm.value;
    const username = obj.username;
    const currentPassword = obj.currentPassword;
    const newPassword = obj.newPassword;

    this.customerService.updateCustomerPassword(username, currentPassword, newPassword).subscribe(
      (data: any) => { // Type 'data' as ApiResponse
        this.msg = data; // Assign response directly
        console.log(this.msg);
        this.flagMsg = true;
        this.flag=true;
        this.myForm.resetForm();
        
      },
      error => {
        console.log(error);
        this.msg = error; // Assign error directly
        this.flagError = true;
        this.flag=true;
        
      }
    );
  }
}