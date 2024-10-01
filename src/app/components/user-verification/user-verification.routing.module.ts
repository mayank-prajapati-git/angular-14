import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserVerificationListComponent } from './user-verification-list/user-verification-list.component';
import { UserVerificationComponent } from './user-verification/user-verification.component';

const routes: Routes = [
    { path: "", component: UserVerificationListComponent },
    { path: "detail", component: UserVerificationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserVerificationRoutingModule { }
