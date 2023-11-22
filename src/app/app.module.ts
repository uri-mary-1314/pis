import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ShareComponent } from './share/share.component';
import { FormsComponent } from './forms/forms.component';
import { UiComponent } from './ui/ui.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterComponent } from './forms/register/register.component';
import { ReportComponent } from './forms/report/report.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentComponent } from './layouts/content/content.component';
import { FooterComponent } from './share/footer/footer.component';
import { HeaderComponent } from './share/header/header.component';
import { StudentComponent } from './ui/student/student.component';
import { TeacherComponent } from './ui/teacher/teacher.component';
import { ErrorPageComponent } from './share/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ShareComponent,
    FormsComponent,
    UiComponent,
    LayoutsComponent,
    InterfacesComponent,
    LoginComponent,
    RegisterComponent,
    ReportComponent,
    FullLayoutComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    StudentComponent,
    TeacherComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
