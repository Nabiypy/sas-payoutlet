import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Forum } from '../services/data';
import {ClrWizard} from '@clr/angular';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Forum[];

  // @ViewChild('wizardlg') wizardLarge: ClrWizard;
  lgOpen: Boolean = false;

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.customers = this.customersService.customers;
  }
}
