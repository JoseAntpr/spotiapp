import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = []

  constructor( public http: HttpClient) { 
    console.log('Servicio de spotify listo')
  }

  getArtistas(termino: string){
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&limit=20`;

    let headers = new HttpHeaders({
      'authorization': 'Bearer BQAPNYHKoZEX_a3xQOjJO5QW5de6ixKHZnavQbJyVF0PvN4HV4hpx0RCdoaSOR3BMNl-txxjGFYRJtzMz3c'
    });

    return this.http.get(url, { headers})
                .map( (resp: any) => {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                })
  }

}
