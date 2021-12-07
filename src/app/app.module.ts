import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserService } from './shared/services/user.service';
import { LocalstorageService } from './shared/services/localstorage.service';

@NgModule({
  declarations: [
    HeaderComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LocalstorageService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
