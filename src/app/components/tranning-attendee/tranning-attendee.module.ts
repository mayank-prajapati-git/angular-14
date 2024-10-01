import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from 'src/app/Core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';
import { MaterialModule } from 'src/app/Core/material.module';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { TranningAttendeeComponent } from './tranning-attendee/tranning-attendee.component';
import { TranningAttendeeRoutingModule } from './tranning-attendee.routing.module';

@NgModule({
    declarations: [
        TranningAttendeeComponent
    ],
    imports: [
        CommonModule,
        TranningAttendeeRoutingModule,
        DemoFlexyModule,
        ComponentsModule,
        // FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class TranningAttendeeModule { }
