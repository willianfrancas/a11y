import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlModule } from './shared/directives/disable-control/disale-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    YesNoButtonGroupModule,
    DisableControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
