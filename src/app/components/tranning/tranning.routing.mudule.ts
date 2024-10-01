import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranningListComponent } from './tranning-list/tranning-list.component';
import { TranningComponent } from './tranning/tranning.component';

const routes: Routes = [
    { path: "", component: TranningListComponent },
    { path: "detail", component: TranningComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TranningRoutingModule { }
