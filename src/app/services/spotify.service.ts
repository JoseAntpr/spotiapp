import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases( ) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAnDnpbj2BIlzhVKSxZDEMf7rYMMi4QwLuHqpuof5YCaecGcsfAHvS-Makv_BETfEj851Hy6kkXhs5Hb5s'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: headers});
  }

}
