import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  baseURL: string = "http://localhost:8099";
  
  constructor(private http: HttpClient) {
  }

  fundTransfer(senderUsername: string, receiverAccountNo: number, amount: number): Observable<string> {
    return this.http.put<string>(`${this.baseURL}/customer/fundTransfer?senderUsername=${senderUsername}&receiverAccountNo=${receiverAccountNo}&amount=${amount}`, null);
  }

  updateCustomerPassword(username:string, currentPassword: string, newPassword: string): Observable<string> {
    const body = {
      currentPassword: currentPassword,
      newPassword: newPassword
    };
    return this.http.put<string>(`${this.baseURL}/customer/updateCustomerPassword?username=${username}`, body);
  }

}
