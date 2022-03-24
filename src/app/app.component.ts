import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';
  user="Shweta";
  isCkecked=true;
  demo(){
    alert(this.user);
    this.isCkecked=!this.isCkecked;
  }

}
