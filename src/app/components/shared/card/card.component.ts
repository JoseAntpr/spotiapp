import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() items;
  constructor(private _router: Router) { }

  goToArtist( item ) {
    let artistaId;
    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    this._router.navigate(['/artist', artistaId]);
  }


}
