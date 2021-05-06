import { Component, Input ,OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-foto-item',
  templateUrl: './foto-item.component.html',
  styleUrls: ['./foto-item.component.css']
})
export class FotoItemComponent implements OnInit {
  @Input() image;

  constructor(private localStorageService: LocalStorageService) { }
  public tag: string = '';

  ngOnInit(): void {
  }


  public saveTag(event){
    console.dir(this.image);
    this.tag = event.target.value;
  }

  public saveItem(event){
     const imageItem = {
      image: this.image,
      imageTag: this.tag
     };
     event.target.setAttribute('disabled',true);
     this.localStorageService.setItem(this.image.title,JSON.stringify(imageItem));

  }

}
