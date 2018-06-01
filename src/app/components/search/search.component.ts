import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino = '';
  artists: any[] = [];
  loading: boolean;

  constructor(public _spotify: SpotifyService) {
  }

  searchArtist() {
    this.loading = true;
    this._spotify.getArtists( this.termino ).subscribe( (data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

}
