import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranningAttendeeComponent } from './tranning-attendee/tranning-attendee.component';

const routes: Routes = [
    { path: "", component: TranningAttendeeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TranningAttendeeRoutingModule { }
