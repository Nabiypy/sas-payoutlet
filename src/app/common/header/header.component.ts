import { Component } from '@angular/core';
// import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) {}

  // logout() {
  //   this.auth.logout();
  //   this.router.navigate(['/login']);
  // }

  logout() {
    this.userService.logout();
  }
  search(city: string) {
    city ? this.router.navigate([`/rentals/${city}/homes`]) : this.router.navigate(['/rentals']);
  }
}
