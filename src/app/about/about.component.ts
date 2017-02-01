import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent  {
  about = {
    title: 'O mnie',
    description: 'Lorem dipsum benchum pressum squatum'
  };
}
