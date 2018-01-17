import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = []

  constructor( public http: HttpClient) { 
    console.log('Servicio de spotify listo')
  }

  getArtistas(){
    let url = 'https://api.spotify.com/v1/search?query=Metallica&type=artist&limit=20';

    let headers = new HttpHeaders({
      'authorization': 'Bearer BQBGRiXZOKWxeflLcfouoX-z9-4zhbJY70xgH9mMg4SPtQ5H7o1lU81YfboLFwcupeO0dUuR3stSFBGxT_I'
    });

    return this.http.get(url, { headers})
                .map( (resp: any) => {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                })
  }

}
