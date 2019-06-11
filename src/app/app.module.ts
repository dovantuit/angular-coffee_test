import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';
import { CultureComponent } from './pages/culture/culture.component';
import { ServicesComponent } from './pages/services/services.component';
import { BusinessComponent } from './pages/business/business.component';
import { EventComponent } from './pages/event/event.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterRightComponent } from './components/footer/footer-right/footer-right.component';
import { FooterLeftComponent } from './components/footer/footer-left/footer-left.component';
import { SubFooterComponent } from './components/footer/sub-footer/sub-footer.component';
import { HomeCarouselComponent } from './pages/home/home-carousel/home-carousel.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    CultureComponent,
    ServicesComponent,
    BusinessComponent,
    EventComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    FooterRightComponent,
    FooterLeftComponent,
    SubFooterComponent,
    HomeCarouselComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
