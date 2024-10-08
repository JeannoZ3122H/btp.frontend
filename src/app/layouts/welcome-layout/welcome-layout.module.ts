import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorLayoutRoutingModule } from '../error-layout/error-layout-routing.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ErrorLayoutRoutingModule
    ],
    exports: [
        CommonModule,
        ErrorLayoutRoutingModule
    ]
})
export class WelcomeLayoutModule { }
