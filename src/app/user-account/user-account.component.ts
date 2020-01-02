import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  private userList : any;

  constructor(private userService : UserService, private router : Router) { 
    this.getUsers();
  }
  getUsers()
  {
    return this.userService.getUsers().subscribe(
      res => {

        this.userList = res;

      },
      error => console.log(error)
    )
  }
  onSelectPrimary(username : string)
  {
    this.router.navigate(['/primaryTransaction', username]);
    //this.userService.getPrimaryAccount(username);
  }
  onSelectSavings(username : string)
  {
    this.router.navigate(['/savingsTransacition', username]);
    //this.userService.getSavingsAccount(username);
  }

  enableUser(username : string)
  {
    this.userService.enableUser(username).subscribe();
    location.reload();
  }
  disableUser(username : string)
  {
    this.userService.disableUser(username).subscribe();
    location.reload();
    
  }

  ngOnInit() {
  }

}
