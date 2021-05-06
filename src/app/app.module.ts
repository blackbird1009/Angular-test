import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchImagesComponent } from './search-images/search-images.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { RouterModule} from '@angular/router';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { FooterComponent } from './footer/footer.component';
import { FotoDisplayComponent } from './foto-display/foto-display.component';
import { FotoItemComponent } from './foto-item/foto-item.component';
import { FotoItemBookComponent } from './foto-item-book/foto-item-book.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import {NgxPaginationModule} from 'ngx-pagination';

const routes = [
  {path: '', component: HomeComponent, icon: 'k-i-table'},
  {path: 'bookmark', component: BookmarkComponent, icon: "k-i-heart-outline"}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchImagesComponent,
    HeaderComponent,
    HomeComponent,
    BookmarkComponent,
    AsideMenuComponent,
    FooterComponent,
    FotoDisplayComponent,
    FotoItemComponent,
    FotoItemBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    RouterModule.forRoot(routes),
    MenuModule,
    LayoutModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
