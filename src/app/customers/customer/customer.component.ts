import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {ClrWizard} from '@clr/angular';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { CustomersService } from '../services/customers.service';
import { Forum } from '../services/data';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @ViewChild('wizardxl') wizardExtraLarge: ClrWizard;
  @ViewChild('number') numberFi: any;
  // lgOpen: Boolean = false;
  xlOpen: Boolean = false;
  accountype: String = 'Individual Account';

  model = {
    name: '',
    favorite: '',
    number: ''
  };

  exampleForm = new FormGroup({
    sample: new FormControl('', Validators.required),
  });

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
