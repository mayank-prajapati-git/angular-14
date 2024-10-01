import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from 'src/app/Core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';
import { MaterialModule } from 'src/app/Core/material.module';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { TranningRoutingModule } from './tranning.routing.mudule';
import { TranningListComponent } from './tranning-list/tranning-list.component';
import { TranningComponent } from './tranning/tranning.component';

@NgModule({
    declarations: [
        TranningListComponent,
        TranningComponent
    ],
    imports: [
        CommonModule,
        TranningRoutingModule,
        DemoFlexyModule,
        ComponentsModule,
        // FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class TranningModule { }
