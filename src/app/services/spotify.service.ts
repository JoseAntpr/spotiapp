import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqW5qeg0wtCavc5azlnKzL8BVDtefZgj0M6oyaNvX5kgwIh8bBC8IOfLRZ0cEgXT2Snhq7zJ5XPiDtljI'
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
