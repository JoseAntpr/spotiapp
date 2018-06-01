import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private _spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit() {
    this._spotify.getNewReleases().subscribe( (data: any) => {
      console.log(data);
      this.newSongs = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.errorMessage = errorServicio.error.error.message;
    });
  }

}
