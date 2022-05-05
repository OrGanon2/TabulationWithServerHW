import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/Services/person.service';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css']
})
export class Person1Component implements OnInit {
UserDetail:any[] = [] 
  constructor(private _Service: PersonService) {
    this._Service.Getallusers().subscribe((params:any)=> {
      this.UserDetail = params;
    });
   }

  ngOnInit(): void {
  }

}
