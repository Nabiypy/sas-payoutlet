import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';

import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadsComponent } from './threads/threads.component';

import { CustomersService } from './services/customers.service';

const forumsRoutes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'forms', component: CustomerComponent },
  {
    path: 'customer/:forum_alias',
    component: CustomerComponent,
    children: [
      { path: '', component: ThreadsComponent },
      { path: ':thread_alias', component: ThreadComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CustomerComponent,
    CustomersComponent,
    ThreadComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forChild(),
    RouterModule.forChild(forumsRoutes),
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
