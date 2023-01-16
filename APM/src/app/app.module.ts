import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from './shared/converting-to-spaces.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule { }
