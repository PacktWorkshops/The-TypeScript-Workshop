import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersService } from './users.service';

@Component({
  selector: 'users-list',
  template: `
		<ul>
			<li *ngFor="let user of (users$ | async)">
				{{ user.name }}
			</li>
		</ul>
	`,
})
export class UsersListComponent {
  readonly users$: Observable<User[]>;

  constructor(private usersService: UsersService) {
    this.users$ = usersService.getUsers();
  }
}
