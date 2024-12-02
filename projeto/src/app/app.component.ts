import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from "./pages/body/body.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
}
