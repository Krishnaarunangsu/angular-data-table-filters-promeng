import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-data-table-filters-promeng';

  navBarOpen : boolean = false;

  toggleNavBar(){
    console.log('Hi......')
    this.navBarOpen = !this.navBarOpen;
  }
}
