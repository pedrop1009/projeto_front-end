import { Component } from '@angular/core';
import { HeaderComponent } from "./_components/header/header.component";
import { FooterComponent } from "./_components/footer/footer.component";
import { BodyComponent } from "./_components/body/body.component";
import { CardsComponent } from "./_components/cards/cards.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BodyComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
