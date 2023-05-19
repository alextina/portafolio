import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly username = 'alextina';
  private readonly beaseUrl = `https://api.github.com/users/${this.username}/repos`

  constructor(
    private http: HttpClient
  ) { }

  getRepositories(): Observable<any[]> {
    return this.http.get<any[]>(this.beaseUrl)
  }

}
