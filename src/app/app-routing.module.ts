import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UsecaseComponent } from './usecase/usecase.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { IntentComponent } from './intent/intent.component';
import { DataGeneratorComponent } from './data-generator/data-generator.component';
import { LoginLandingComponent } from './login-landing/login-landing.component';
// import { FlowchartComponent } from './flowchart/flowchart.component'; 
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:LoginComponent},
  {path:"landing",component:LoginLandingComponent},
  {path:"config",component:ConfigurationComponent},
  {path:"usecase",component:UsecaseComponent},
  {path:"chat",component:ChatDialogComponent},
  {path:"intent",component:IntentComponent},
  // {path:"flowchart",component:FlowchartComponent},
  {path:"data-generator",component:DataGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
