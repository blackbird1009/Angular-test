import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

export interface FlickrPhoto{
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private http: HttpClient) { }

  search_keyword(key: string){
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${key}&format=json&nojsoncallback=1`;

    return this.http.get(url + params).pipe(map((res: FlickrOutput)=>{
      const urlArr = [];
      res.photos.photo.forEach((photoItem: FlickrPhoto) =>{
        const photoObj = {
          url: `https://live.staticflickr.com/${photoItem.server}/${photoItem.id}_${photoItem.secret}.jpg`,
          title: photoItem.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));
  }
}
