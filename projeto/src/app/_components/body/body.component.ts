import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsComponent } from "../forms/forms.component";
import { IntroductionComponent } from "../introduction/introduction.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  imports: [CardsComponent, FormsComponent, FooterComponent, IntroductionComponent, HeaderComponent]
})
export class BodyComponent {

}
