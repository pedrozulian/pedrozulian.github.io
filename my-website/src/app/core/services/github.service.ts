import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'protractor';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GithubEvent } from 'src/app/shared/models/github/github-event.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  public getEventsGithub() {
    return this.http.get<GithubEvent[]>('https://api.github.com/users/pedrozulian/events')
    .pipe(
      map(events => events.map(eve => new GithubEvent().deserialize(eve)),
      catchError(error => throwError(error))
      )
    )
  }

  public getRepositoriesGithub() {
    return this.http.get('https://api.github.com/users/pedrozulian/repos');
  }
}
