import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  public images;
  public currentComponent;

  constructor() {
    this.currentComponent = 'Bookmark';
  }

  ngOnInit(): void {
  }


}
