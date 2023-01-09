import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private http:HttpClient, private activateRoute : ActivatedRoute ){

  }

userid : any;
user :any;

  ngOnInit(): void {
    this.userid=this.activateRoute.snapshot.paramMap.get('id');
    this.http.get('https://jsonplaceholder.typicode.com/users/'+this.userid).subscribe(usr => this.user = usr)
  }

}
