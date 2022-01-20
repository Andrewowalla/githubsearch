import { Component, OnInit ,Input} from '@angular/core';
import { Repository } from '../repository';
@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {


  @Input() userRepositories!: Repository[]
  constructor() { }

  ngOnInit(): void {
  }

}
