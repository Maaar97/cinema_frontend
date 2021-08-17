import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cinema-frontend';
  userId = null as number | null;
  userName = null as string | null;
  
  ngOnInit(): void {
    this.userId = Number.parseInt(localStorage.getItem('userId')?? "-1");
    this.userName = localStorage.getItem('userName');
  }


}
