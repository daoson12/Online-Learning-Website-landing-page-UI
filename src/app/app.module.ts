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
import { ServiceComponent } from './Section/service/service.component';
import { TeacherComponent } from './Section/teacher/teacher.component';
import { TestimonialsComponent } from './Section/testimonials/testimonials.component';
import { StatisticsComponent } from './Section/statistics/statistics.component';
import { TeamComponent } from './Section/team/team.component';
import { SubcribeComponent } from './Section/subcribe/subcribe.component';
import { FooterComponent } from './Section/footer/footer.component';



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
    TeacherComponent,
    TestimonialsComponent,
    StatisticsComponent,
    TeamComponent,
    SubcribeComponent,
    FooterComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
