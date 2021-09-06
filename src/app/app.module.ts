import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UsecaseComponent } from './usecase/usecase.component';
//import { FlowchartComponent } from './flowchart/flowchart.component';
// import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatModule } from './chat/chat.module';
import { HttpClientModule } from '@angular/common/http';
import { IntentComponent } from './intent/intent.component';
import { DataGeneratorComponent } from './data-generator/data-generator.component';
import { LoginLandingComponent } from './login-landing/login-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigurationComponent,
    UsecaseComponent,
    //FlowchartComponent,
    IntentComponent,
    DataGeneratorComponent,
    LoginLandingComponent,
    // ChatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChatModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
