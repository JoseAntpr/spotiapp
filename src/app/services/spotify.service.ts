import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases( ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDJOvogFASvB2rT86TWmpr7vlMFX6RrsCAui5gEPMmm2ZPucbIYuzcvN7VDvxh5xTs4dpAq9dzv2nUN-Z8'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: headers});
  }

}
