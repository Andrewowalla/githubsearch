import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private httpClient: HttpClient) { }
  private token = environment.token


  getUserData(searchQuery:any){
    return this.httpClient.get(`https://api.github.com/users/${searchQuery}?`)
  }

  getUserRepos(searchQuery:any){
    return this.httpClient.get(`}${searchQuery}/repos?${this.token}`)
  }
}
