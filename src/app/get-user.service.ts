import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  searchQuery!:any;
  constructor(private httpClient: HttpClient) { }
  private token = environment.token
  private apiUrl = environment.apiUrl


  getUserData(searchQuery:any){
    
    return this.httpClient.get(`https://api.github.com/users/${searchQuery}?`)
  }

  getUserRepos(searchQuery:any){
    return this.httpClient.get(`${this.apiUrl}${searchQuery}/repos?${this.token}`)
  }
}
