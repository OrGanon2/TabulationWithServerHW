import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  UserDetail:any = {}
  id:number = 0
  constructor(private _Service:PersonService, private _Route: ActivatedRoute) {
     this._Route.params.subscribe(params => {
       this.id = params["id"];
     })
      this._Service.GetUser(this.id).subscribe(x =>{
        this.UserDetail = x;
      })
    
   }

  ngOnInit(): void {
  }

}
