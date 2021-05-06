import { Component, Input,Output,EventEmitter ,OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-foto-item-book',
  templateUrl: './foto-item-book.component.html',
  styleUrls: ['./foto-item-book.component.css']
})
export class FotoItemBookComponent implements OnInit {
  @Input() image;
  @Output() deleted = new EventEmitter<boolean>();
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  deleteItem(del: boolean){
    this.localStorageService.removeItem(this.image.image.title);
    this.deleted.emit(del);
 }

}
