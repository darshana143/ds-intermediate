import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './ui-containers/top-bar/top-bar.component';
import { LeftPanalComponent } from './ui-containers/left-panal/left-panal.component';
import { DsComponentsModule } from './ds-components/ds-components.module';
import { EnterScreenComponent } from './enter-screen/enter-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightPanalComponent } from './ui-containers/right-panal/right-panal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { KeyLockerComponent } from './key-locker/key-locker.component';
import { AgGridModule } from 'ag-grid-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SettingsComponent } from './settings/settings.component';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SettingsPopupComponent } from './ds-components/settings-popup/settings-popup.component';

import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

// -------------------------------- PrimeNG ----------------------------------------
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {TabViewModule} from 'primeng/tabview';
import {ChartModule} from 'primeng/chart';
import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';
import { MessageComponent } from './message/message.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LeftPanalComponent,
    EnterScreenComponent,
    DashboardComponent,
    RightPanalComponent,
    UserProfileComponent,
    KeyLockerComponent,
    SettingsComponent,
    SignUpComponent,
    SignInComponent,
    SettingsPopupComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    DsComponentsModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    TabViewModule,
    AgGridModule,
    ChartModule,
    DragDropModule,
    ProgressBarModule,
    ButtonModule,
    SocialLoginModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
