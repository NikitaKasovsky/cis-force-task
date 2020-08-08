import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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

  // pagination
  public pagination = {
    count: 0,
    limit: 6,
    currentPage: 0
  };

  // load user list
  private loadUsers(): void {
    this.api.getUsers(this.pagination.currentPage + 1)
      .subscribe((list: IUsers) => {
        this.users = list.data;
        this.pagination.limit = list.per_page;
        this.pagination.currentPage = list.page;
        this.pagination.count = list.total;
      });
  }

  // Pgination hundler
  public pageEventHandler(event: PageEvent): void {
    this.pagination.currentPage = event.pageIndex;
    this.pagination.limit = event.pageSize;
    this.loadUsers();
  }

  // Init component
  public ngOnInit(): void {
    this.loadUsers();
  }

}
