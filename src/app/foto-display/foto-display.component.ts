import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-foto-display',
  templateUrl: './foto-display.component.html',
  styleUrls: ['./foto-display.component.css']
})
export class FotoDisplayComponent implements OnInit {

  @Input() parentComponent;
  @Input() images = [];
  p: number = 1;
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    if(this.parentComponent == 'Bookmark'){
      this.images = this.getAllItem();
    }
  }

  private getAllItem(){
    return this.localStorageService.getAllItem().map(item => JSON.parse(item));
  }

  onDelete(del: boolean) {
    if(del){
      this.images = this.getAllItem();
    }

  }

}
