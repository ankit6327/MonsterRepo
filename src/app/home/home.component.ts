import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private route:Router, 
    private http:HttpClient){

  }


  searchText :any;

  user: any[] = [];
  title = 'assignment';

  onCardClick(){
     this.route.navigate(['/details']);
     console.log('Card clicked');
   }
 
   ngOnInit(){
       this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(users=>this.user=users)
   }
 

   
  onSearchTextChange(value: any) {
    if(value===''){
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(users=>this.user=users);
    }else{
    this.user = this.user.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    }
  }


}
