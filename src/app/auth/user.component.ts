import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userActions from './actions/user.actions';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

@Component({
  selector: 'hdt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Observable<User>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.user = this.store.select('user');
    this.store.dispatch(new userActions.GetUser());
  }

  googleLogin(): void {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout(): void {
    this.store.dispatch(new userActions.LogOut());
  }
}
