import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  public fecha : Date = new Date(Date.now());

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'libreriaApi';
}
