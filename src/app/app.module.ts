import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { InfoSectionComponent } from './Component/Footer/footer.component';
import { AboutComponent } from './Component/about/about.component';
import { ServicesComponent } from './Component/services/services.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeComponent } from './Component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendDevelopmentTechnologiesComponent } from './Technology/backendDevelopmentTechnologies/backendDevelopmentTechnologies.component';
import { CloudDevelopmentTechnologiesComponent } from './Technology/cloudDevelopmentTechnologies/cloudDevelopmentTechnologies.component';
import { CMSDevelopmentTechnologiesComponent } from './Technology/CMSDevelopmentTechnologies/CMSDevelopmentTechnologies.component';
import { DatabaseDevelopmentTechnologiesComponent } from './Technology/databaseDevelopmentTechnologies/databaseDevelopmentTechnologies.component';
import { DevOpsDevelopmentTechnologiesComponent } from './Technology/devOpsDevelopmentTechnologies/devOpsDevelopmentTechnologies.component';
import { FrameworksDevevelopmentTechnologiesComponent } from './Technology/frameworksDevevelopmentTechnologies/frameworksDevevelopmentTechnologies.component';
import { FrontendDevelopmentTechnologiesComponent } from './Technology/frontendDevelopmentTechnologies/frontendDevelopmentTechnologies.component';
import { MobileDevelopmentTechnologiesComponent } from './Technology/mobileDevelopmentTechnologies/mobileDevelopmentTechnologies.component';
import { PageNotFoundComponent } from './SharedComponent/PageNotFound/PageNotFound.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './SharedComponent/Chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoSectionComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent, 
    
    FrontendDevelopmentTechnologiesComponent,
    BackendDevelopmentTechnologiesComponent,
    MobileDevelopmentTechnologiesComponent,
    DatabaseDevelopmentTechnologiesComponent,
    FrameworksDevevelopmentTechnologiesComponent,
    CloudDevelopmentTechnologiesComponent,
    DevOpsDevelopmentTechnologiesComponent,
    CMSDevelopmentTechnologiesComponent,
    PageNotFoundComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
