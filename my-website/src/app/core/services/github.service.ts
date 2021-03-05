import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  public getEventsGithub() {
    return this.http.get('https://api.github.com/users/pedrozulian/events');
  }

  public getRepositoriesGithub() {
    return this.http.get('https://api.github.com/users/pedrozulian/repos');
  }
}
