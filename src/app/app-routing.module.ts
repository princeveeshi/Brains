import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { HomeComponent } from './Component/home/home.component';
import { ServicesComponent } from './Component/services/services.component';
import { BackendDevelopmentTechnologiesComponent } from './Technology/backendDevelopmentTechnologies/backendDevelopmentTechnologies.component';
import { CloudDevelopmentTechnologiesComponent } from './Technology/cloudDevelopmentTechnologies/cloudDevelopmentTechnologies.component';
import { CMSDevelopmentTechnologiesComponent } from './Technology/CMSDevelopmentTechnologies/CMSDevelopmentTechnologies.component';
import { DatabaseDevelopmentTechnologiesComponent } from './Technology/databaseDevelopmentTechnologies/databaseDevelopmentTechnologies.component';
import { DevOpsDevelopmentTechnologiesComponent } from './Technology/devOpsDevelopmentTechnologies/devOpsDevelopmentTechnologies.component';
import { FrameworksDevevelopmentTechnologiesComponent } from './Technology/frameworksDevevelopmentTechnologies/frameworksDevevelopmentTechnologies.component';
import { FrontendDevelopmentTechnologiesComponent } from './Technology/frontendDevelopmentTechnologies/frontendDevelopmentTechnologies.component';
import { MobileDevelopmentTechnologiesComponent } from './Technology/mobileDevelopmentTechnologies/mobileDevelopmentTechnologies.component';
import { ChatComponent } from './SharedComponent/Chat/chat.component';


const routes: Routes = [
  { path: '', component: HomeComponent },         // Home route
  { path: 'about', component: AboutComponent },   // About route
  { path: 'service', component: ServicesComponent }, // Services route
  { path: 'contact', component: ContactComponent }, // Contact route
  { path: 'chatBot', component: ChatComponent }, // chatBot route
  { path: 'frontend-development', component: FrontendDevelopmentTechnologiesComponent },
  { path: 'backend-development', component: BackendDevelopmentTechnologiesComponent },
  { path: 'mobile-development', component: MobileDevelopmentTechnologiesComponent },
  { path: 'database-development', component: DatabaseDevelopmentTechnologiesComponent },
  { path: 'frameworks-development', component: FrameworksDevevelopmentTechnologiesComponent },
  { path: 'cloud-development', component: CloudDevelopmentTechnologiesComponent },
  { path: 'devops-development', component: DevOpsDevelopmentTechnologiesComponent },
  { path: 'cms-development', component: CMSDevelopmentTechnologiesComponent },
  { path: '**', redirectTo: '' }      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
