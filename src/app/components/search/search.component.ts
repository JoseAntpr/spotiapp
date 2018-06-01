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

  constructor(public _spotify: SpotifyService) { }

  searchArtist() {
    this._spotify.getArtista( this.termino ).subscribe( (data: any) => {
      this.artists = data;
    });
  }

}
