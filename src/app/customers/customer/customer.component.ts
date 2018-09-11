import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CustomersService } from '../services/customers.service';
import { Forum } from '../services/data';

import {ClrWizard} from '@clr/angular';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild('wizardxl') wizardExtraLarge: ClrWizard;
  // lgOpen: Boolean = false;
  xlOpen: Boolean = false;
  accountype: String = 'Individual Account';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumsService: CustomersService) { }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.forum = this.forumsService.forum(params['forum_alias']);
    //   if (!this.forum) this.router.navigate(['/not-found']);
    // });
  }
}
