/* Dependencias */

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

/* Components */

import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegistroMoralComponent } from './registro-moral/registro-moral.component';
import { DatosRepresentanteRmComponent } from './datos-representante-rm/datos-representante-rm.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistroFisicoComponent } from './registro-fisico/registro-fisico.component';
import { RegistroFComponent } from './registro-f/registro-f.component';
import { DocumentsFinancialStateComponent } from './documents-financial-state/documents-financial-state.component';
import { FinancialStatementComponent } from './financial-statement/financial-statement.component';
import { FinancialRatiosComponent } from './financial-ratios/financial-ratios.component';


const appRoutes: Routes = [
  { path: 'switch', component: RegistroFisicoComponent },
  { path: 'login', component: LoginFormComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'registro-fisico', component: RegistroFComponent },
  { path: 'Recuperar-password', component: RecoverPasswordComponent },
  { path: 'Registro-Moral', component: RegistroMoralComponent },
  { path: 'Representante', component: DatosRepresentanteRmComponent },
  { path: 'Estado-Financiero', component: FinancialStatementComponent },
  { path: 'Razones-Financieras', component: FinancialRatiosComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistroFisicoComponent,
    RegistroFComponent,
    RecoverPasswordComponent,
    RegistroMoralComponent,
    DatosRepresentanteRmComponent,
    DocumentsFinancialStateComponent,
    FinancialStatementComponent,
    FinancialRatiosComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    [BrowserModule, BrowserAnimationsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
