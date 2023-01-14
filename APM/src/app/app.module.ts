import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule
    ]
})
export class AppModule { }