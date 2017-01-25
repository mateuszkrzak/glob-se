import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  about = {
    title: "O mnie",
    description: "Lorem dipsum benchum pressum squatum"
  };

}
