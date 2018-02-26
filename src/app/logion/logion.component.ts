import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../services/authentication.service';;
import { Router } from '@angular/router';
@Component({
  selector: 'app-logion',
  templateUrl: './logion.component.html',
  styleUrls: ['./logion.component.css']
})
export class LogionComponent implements OnInit {
email: string;
password: string;
msg: string;
  constructor(private authService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
  }

  login()
  {
    this.authService.login({email: this.email, password:this.password})
    .then(resolve => this.router.navigate(['dashboard']))
    .catch(error => this.msg = error.message);
  }

}
