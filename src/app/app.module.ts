import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApmModule, ApmService } from '@elastic/apm-rum-angular'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApmModule
  ],
  providers: [ApmService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(service: ApmService) {
    // Agent API is exposed through this apm instance
    const apm = service.init({
      serviceName: 'angular-app',
      serverUrl: 'http://localhost:8200',
      logLevel: 'debug'
    })

    apm.setUserContext({
      'username': 'foo',
      'id': 'bar'
    })
  }
}




