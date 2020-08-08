import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

// Services
import { ApiService } from 'src/app/services';

// Interfaces
import { IDetailUser } from 'src/app/interfaces';

// Component detail user info
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(
    private readonly api: ApiService,
    private readonly route: ActivatedRoute
  ) { }

  // is loading
  public isLoading: boolean;

  // loaded user
  public user: IDetailUser;

  // Load detail user data
  private loadUser(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');

    this.api.getUserDetail(id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((user: IDetailUser) => {
        this.user = user;
      });
  }

  // Init component
  public ngOnInit(): void {
    this.loadUser();
  }

}
