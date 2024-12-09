import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
   //Função paraexibir alerta
 alerta(){
  alert('login efetuado com sucesso!')
}

// Variável para exibir ou ocultar formulário
exibir:boolean = true;

//função para exibir ou ocultar
ocultar(){
  if(this.exibir === true){
    this.exibir = false;
  }else{
    this.exibir = true;
  }
}
}
