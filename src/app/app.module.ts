import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';

import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ForumsModule } from './forums/forums.module';
import { CustomersModule } from './customers/customers.module';

import { HeaderComponent } from './common/header/header.component';


const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ChatListComponent, outlet: 'chat', canActivate: [AuthGuardService] },
  { path: 'users/:username', component: ChatComponent, outlet: 'chat', canActivate: [AuthGuardService] },
  { path: 'blogs', loadChildren: '../app/blogs/blogs.module#BlogsModule' },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'forums', component: ForumsModule},
  { path: 'customers', component: CustomersModule},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    FormsModule,
    ForumsModule,
    CustomersModule,
    SwiperModule
  ],
  providers: [AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
