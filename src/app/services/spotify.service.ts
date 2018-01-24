import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQDdVulynNtWVDO5hJktTrubHzBzoPpRIH5mmSBGRH-9wkWuwt78UZHULVWQWHAXRi0ONYz9n8ybudwMFo0'

  constructor( public http: HttpClient) { 
  }


  private getHeaders():HttpHeaders{

    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtistas(termino: string){
    let url = `${this.urlSpotify}search?query=${ termino }&type=artist&limit=20`;
    
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
                .map( (resp: any) => {
                  this.artistas = resp.artists.items;
                  return this.artistas;
                })
  }

  getArtista(id: string){

    let url = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders()

    return this.http.get(url, { headers});
  }

  getTopTracks(id: string){

    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });

  }
}

