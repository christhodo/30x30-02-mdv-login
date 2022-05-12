import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  model = 'players';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(player) {
    return this.http.post(this.getUrl(), player);
  }

  update(player) {
    return this.http.put(this.getUrlWithID(player.id), player);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
