import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA4J83L9NP9Dg6N6uWh7I2jefwAj_108EPoTS5LSB0JbjeK6wYvR-jTRMiWw0sXdhyYhMDI3tYUVXmOEbU'
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

  getArtista( term: string) {
    return this.getQuery(`search?q=${ term }&type=artist&limit=20`)
                .pipe(
                  map(data => {
                    console.log(data);
                    return data['artists'].items;
                  })
                );
  }

}
