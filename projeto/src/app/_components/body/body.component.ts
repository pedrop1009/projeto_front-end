import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  imports: [CardsComponent]
})
export class BodyComponent {

}
