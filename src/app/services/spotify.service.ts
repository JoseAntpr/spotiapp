import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA7Oh-4drEbpsAXEjBf6E6WunO0bQ6G-QhitX1j1-X5eHK6xxXj2KfIa3yyLXDB520Kr9CDf-79gNzbqGc'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases( ) {
    return this.getQuery('browse/new-releases')
                .pipe(
                  map(data => {
                    console.log(data);
                    return data['albums'].items;
                  })
                );
  }

  getArtists( term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=20`)
                .pipe(
                  map(data => {
                    console.log(data);
                    return data['artists'].items;
                  })
                );
  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
                .pipe(
                  map(data => {
                    return data['tracks'];
                  })
                );
  }



}
