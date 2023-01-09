import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient, 
    private route:Router){

  }
  user: any[] | undefined;
  title = 'assignment';

  ngOnInit(){
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(users=>this.user=users)
  }


  onCardClick(){
   // this.route.navigate(['/details/'+1]);
    this.route.navigate(['/details']);
    console.log('Card clicked');
  }
}
