import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccordianContainerComponent } from './components/accordian-container/accordian-container.component';
import { ApiService } from './services/api.service';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
