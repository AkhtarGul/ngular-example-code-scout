import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HireFormComponent } from './hire-form/hire-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { InfinteScrollDirective } from './directives/infinte-scroll.directive';
import { ProfileComponent } from './profile-view/profile/profile.component';
// import {Reacti}
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HireFormComponent,
    ProfileViewComponent,
    ScrollToTopComponent,
    InfinteScrollDirective,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
