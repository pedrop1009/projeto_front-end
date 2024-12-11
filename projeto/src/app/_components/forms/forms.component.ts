import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  email: string = '';
  senha: string = '';

  exibir: boolean = true;

  alerta() {
    if (!this.email || !this.senha) {
      alert('Erro: Usuário ou senha inexistentes. Por favor, preencha os campos corretamente.');
    } else {
      alert('Login efetuado com sucesso!');
    }
  }

  ocultar() {
    this.exibir = !this.exibir;
  }
}
