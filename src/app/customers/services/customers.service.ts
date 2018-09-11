import { Injectable } from '@angular/core';
import { Data, Users } from './data';

@Injectable()
export class CustomersService {
  private _users = Users;
  private _data = Data;

  get customers() {
    return this._data;
  }

  customer(forumAlias: string) {
    return this._data.find(row => {
      return row.alias === forumAlias;
    });
  }

  threads(forumAlias: string) {
    return this._data.find(row => {
      return row.alias === forumAlias;
    }).threads;
  }

  thread(forumAlias: string, threadAlias: string) {
    return this.customer(forumAlias).threads.find(row => {
      return row.alias === threadAlias;
    });
  }

  get users() {
    return this._users;
  }
}
