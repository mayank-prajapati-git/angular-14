import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from 'src/app/Core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';
import { MaterialModule } from 'src/app/Core/material.module';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { SupportListComponent } from './support-list/support-list.component';
import { SupportComponent } from './support/support.component';
import { SupportRoutingModule } from './support.routing.module';

@NgModule({
    declarations: [
        SupportListComponent,
        SupportComponent
    ],
    imports: [
        CommonModule,
        SupportRoutingModule,
        DemoFlexyModule,
        ComponentsModule,
        // FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SupportModule { }
