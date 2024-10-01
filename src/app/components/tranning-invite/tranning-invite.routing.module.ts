import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranningInviteComponent } from './tranning-invite/tranning-invite.component';

const routes: Routes = [
    { path: "", component: TranningInviteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TranningInviteRoutingModule { }
