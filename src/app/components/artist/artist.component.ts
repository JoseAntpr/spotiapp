import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {

  artista: any = {};
  tracks:  any = [];
  constructor( private activatedRoute: ActivatedRoute,
               public _spotify: SpotifyService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }


}
