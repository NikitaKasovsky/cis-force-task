import { Component, OnInit } from '@angular/core';

// Services
import { ApiService } from 'src/app/services';

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

  // load user list
  private loadUsers(): void {
    this.api.getUsers()
      .subscribe(console.log)
  }

  // Init component
  public ngOnInit(): void {
    this.loadUsers();
  }

}
