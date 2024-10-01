import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from 'src/app/Core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';
import { MaterialModule } from 'src/app/Core/material.module';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
import { UserVerificationRoutingModule } from './user-verification.routing.module';
import { UserVerificationListComponent } from './user-verification-list/user-verification-list.component';
import { UserVerificationComponent } from './user-verification/user-verification.component';

@NgModule({
    declarations: [
        UserVerificationListComponent,
        UserVerificationComponent
    ],
    imports: [
        CommonModule,
        UserVerificationRoutingModule,
        DemoFlexyModule,
        ComponentsModule,
        // FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class UserVerificationModule { }
