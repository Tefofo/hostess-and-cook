import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h-c';
  isStyleAndTaste = false;

  constructor(private route: Router) {

  }

  ngOnInit() {

  }

  goToStyle() {
    console.log('I am clicked!');
    this.isStyleAndTaste = true;
    this.route.navigate(['/orders']);
  }
  openOdette() {
    this.route.navigate(['/testimonial-details'])
  }
  
}
