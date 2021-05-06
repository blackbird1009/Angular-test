import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {
  public images = [];
  public currentComponent;
  public keyword;
  constructor(private flickServise: FlickrService) { }

  ngOnInit(): void {
    this.currentComponent = 'Search';
  }

  search(event:any){
    this.keyword = event.target.value.toLowerCase();
    if(this.keyword && this.keyword.length>0){
      this.flickServise.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }
}
