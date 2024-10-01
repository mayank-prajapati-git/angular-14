import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from 'src/app/Core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';
import { MaterialModule } from 'src/app/Core/material.module';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { TranningInviteRoutingModule } from './tranning-invite.routing.module';
import { TranningInviteComponent } from './tranning-invite/tranning-invite.component';

@NgModule({
    declarations: [
        TranningInviteComponent
    ],
    imports: [
        CommonModule,
        TranningInviteRoutingModule,
        DemoFlexyModule,
        ComponentsModule,
        // FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class TranningInviteModule { }
