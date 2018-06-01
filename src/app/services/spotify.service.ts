import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD_9GymqTokAwS6HRUfUFa428oJlZyWo0qiasM78klWiY6MptD1iagJub8TLu7szNeRUgPHKESBmad5TEE'
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
