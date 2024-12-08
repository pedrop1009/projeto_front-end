import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  imports: [CardsComponent, FooterComponent]
})
export class BodyComponent {

}
