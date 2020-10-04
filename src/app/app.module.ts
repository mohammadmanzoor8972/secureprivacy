import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccordianContainerComponent } from './components/accordian-container/accordian-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    DashboardComponent,
    AccordianContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
