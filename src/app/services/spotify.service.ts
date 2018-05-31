import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases( ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBgN81xThGL1wzUm6327IstS1fFI5Lv81p1NFlHECyakSSeQlI4c9Y_4DexC7wirDRiynp15wVB-uPyPPk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers: headers});
  }

  getArtista( term: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBgN81xThGL1wzUm6327IstS1fFI5Lv81p1NFlHECyakSSeQlI4c9Y_4DexC7wirDRiynp15wVB-uPyPPk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ term }&type=artist&limit=20`, { headers: headers});
  }

}
