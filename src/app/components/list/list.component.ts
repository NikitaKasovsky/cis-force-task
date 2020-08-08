import { Component, OnInit } from '@angular/core';

// Services
import { ApiService } from 'src/app/services';

// Interfaces
import { IUsers, IUserData } from 'src/app/interfaces';

// Component user list
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private readonly api: ApiService
  ) { }

  // List users
  public users: IUserData[];

  // load user list
  private loadUsers(): void {
    this.api.getUsers()
      .subscribe((list: IUsers) => {
        this.users = list.data;
      });
  }

  // Init component
  public ngOnInit(): void {
    this.loadUsers();
  }

}
