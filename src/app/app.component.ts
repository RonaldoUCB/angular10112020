import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10112020';

  navbarOpen = false;
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

}
