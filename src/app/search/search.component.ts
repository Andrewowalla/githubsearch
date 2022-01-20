import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
import { User } from '../user';
import { Repository } from '../repository';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {



  user = new User("", "", "", "", 0, 0)

  public userQuery!: string
  public userProfile!: any
  public userRepositories!:any

  showTab = false

  searchUser(userQuery:any){
    this.getUserService.getUserData(this.userQuery).subscribe(userData=>{
      this.userProfile = userData
      console.log(this.userProfile)
    })

    this.getUserService.getUserRepos(this.userQuery).subscribe(userData=>{
      this.userRepositories = userData
      console.log(this.userRepositories)
    })

    this.showTab = true
  }

  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
  }

}
