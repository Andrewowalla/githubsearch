import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = environment.apiUrl
  private token = environment.token
  private clientId = environment.clientId
  private clientSecret = environment.clientSecret

  getUserData(searchQuery:any){
    return this.httpClient.get(`https://api.github.com/users/${searchQuery}?${this.clientId}&client_secret=${this.clientSecret}`)
  }

  getUserRepos(searchQuery:any){
    return this.httpClient.get(`${this.apiUrl}${searchQuery}/repos?${this.token}`)
  }
}
