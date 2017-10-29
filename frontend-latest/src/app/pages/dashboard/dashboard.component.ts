import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private authenticationService: AuthenticationService) {
  }

  setCancer() {
    this.authenticationService.setCancer(false);
  }

  setCancer1() {
    this.authenticationService.setCancer(true);

  }
}
