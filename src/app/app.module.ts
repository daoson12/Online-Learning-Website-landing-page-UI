import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { BannerComponent } from './Layout/banner/banner.component';
import { BannerSliderComponent } from './Layout/banner-slider/banner-slider.component';
import { BannerFormComponent } from './Layout/banner-form/banner-form.component';
import { AboutComponent } from './Section/about/about.component';
import { ServiceComponent } from './Section/service/service.component'
import { StatisticsComponent } from './Section/statistics/statistics.component';
import { SubcribeComponent } from './Section/subcribe/subcribe.component';
import { FooterComponent } from './Section/footer/footer.component';
import { InstructorsComponent } from './Section/instructors/instructors.component';
import { ContactComponent } from './Section/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    BannerSliderComponent,
    BannerFormComponent,
    AboutComponent,
    ServiceComponent,
    StatisticsComponent,
    SubcribeComponent,
    FooterComponent,
    InstructorsComponent,
    ContactComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
