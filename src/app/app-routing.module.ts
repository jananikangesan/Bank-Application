import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {path:'updatePassword',component:UpdatePasswordComponent},
  {path:'fundTransfer',component:FundTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
