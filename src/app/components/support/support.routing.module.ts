import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportListComponent } from './support-list/support-list.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
    { path: "", component: SupportListComponent },
    { path: "detail", component: SupportComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupportRoutingModule { }
