import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;
	constructor (private loginService: LoginService, private router : Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  onSubmit() {
  	this.loginService.sendCredential(this.username, this.password).subscribe(
      res => {
        //console.log(res);
        this.loggedIn=true;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        //this.router.navigate(['/']);
        location.reload();
        //console.log(res);
      },
      err => console.log(err)
    );
  }

  ngOnInit() {}

}
