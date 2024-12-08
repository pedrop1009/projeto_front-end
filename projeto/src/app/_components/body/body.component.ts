import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsComponent } from "../forms/forms.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  imports: [CardsComponent, FormsComponent, FooterComponent]
})
export class BodyComponent {

}
