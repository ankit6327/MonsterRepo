import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  constructor(private http : HttpClient){

  }
  @Input() userValue: any

  userId : string | undefined;

  imageUrl: string | undefined;



  ngOnInit(){
    this.http.get('https://robohash.org/$%7Bid%'+this.userValue.id+'D?set=set2&size=180x180', { responseType: 'blob' }).subscribe(imageBlob => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.imageUrl = reader.result as string;
      }, false);
      if (imageBlob) {
        reader.readAsDataURL(imageBlob);
      }
    });


  }

}
