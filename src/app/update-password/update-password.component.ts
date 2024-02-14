import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent implements OnInit{

  @ViewChild('myForm') myForm!: NgForm;
  msg?: string;

  constructor(private customerService: CustomerServiceService){}


  ngOnInit(): void {
   this.updatePassword;
  }
  
  updatePassword(obj: any){
    const username=obj.username;
    const currentPassword=obj.currentPassword;
    const newPassword=obj.newPassword;
    this.customerService.updateCustomerPassword(username,currentPassword,newPassword).subscribe(data=>{
      this.msg =data; 
      console.log(this.msg);
    },error=>console.log(error))
   this.myForm.resetForm();
  }
}
