import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { CommitGithub } from 'src/app/shared/models/github/commit.model';
import { EventsGithub } from 'src/app/shared/models/github/events.model';
import { RepositoryGithub } from 'src/app/shared/models/github/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient 
  ) { }

  public getEvents(): Observable<EventsGithub[]> {
    return this.http
            .get<EventsGithub[]>('https://api.github.com/users/pedrozulian/events')
            .pipe(
              map((events => events.map(eve => new EventsGithub().deserialize(eve)))
              )
            );
  }

  public getCommits() {
    return this.http
            .get<CommitGithub[]>('https://api.github.com/users/pedrozulian/events')
            .pipe(
              map(events => events.map((eve: EventsGithub) => eve.payload.commits.map(commit => new CommitGithub().deserialize(commit))))
            );
  }

  public getRepositories() {
    return this.http
            .get<RepositoryGithub[]>('https://api.github.com/users/pedrozulian/repos')
            .pipe(
              map(repositories => repositories.map(repo => new RepositoryGithub().deserialize(repo)))
            )
  }
}
