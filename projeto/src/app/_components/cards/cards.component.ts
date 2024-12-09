import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  // Variável de imagem
  imagem_amazonica: string = 'assets/floresta-amazonica.jpg';
  imagem_cerrado:string = 'assets/cerrado.jpg';
  imagem_atlantica:string = 'assets/mata-atlantica.jpg';
  imagem_caatinga:string = 'assets/caatinga.jpg';
  imagem_pantanal:string = 'assets/pantanal.jpg';
  imagem_pampa:string = 'assets/pampa.jpg';

  // Função para alterar imagem da Amazônia
  alterar_amazonica() {
    if (this.imagem_amazonica === 'assets/floresta-amazonica.jpg') {
      this.imagem_amazonica = 'assets/onça01.jpg';
    } else {
      this.imagem_amazonica = 'assets/floresta-amazonica.jpg';
    }
  }

  // Função para alterar imagem do Cerrado
  alterar_cerrado() {
    if (this.imagem_cerrado === 'assets/cerrado.jpg') {
      this.imagem_cerrado = 'assets/lobo-guara.jpg';
    } else {
      this.imagem_cerrado = 'assets/cerrado.jpg';
    }
  }

  // Função para alterar imagem da Mata Atlântica
  alterar_atlantica() {
    if (this.imagem_atlantica === 'assets/mata-atlantica.jpg') {
      this.imagem_atlantica = 'assets/mico-leao.jpg';
    } else {
      this.imagem_atlantica = 'assets/mata-atlantica.jpg';
    }
  }

  // Função para alterar imagem da Caatinga
  alterar_caatinga() {
    if (this.imagem_caatinga === 'assets/caatinga.jpg') {
      this.imagem_caatinga = 'assets/asa-branca.jpg';
    } else {
      this.imagem_caatinga = 'assets/caatinga.jpg';
    }
  }

  // Função para alterar imagem do Pantanal
  alterar_pantanal() {
    if (this.imagem_pantanal === 'assets/pantanal.jpg') {
      this.imagem_pantanal = 'assets/tuiuiu.jpg';
    } else {
      this.imagem_pantanal = 'assets/pantanal.jpg';
    }
  }

  // Função para alterar imagem do Pampa
  alterar_pampa() {
    if (this.imagem_pampa === 'assets/pampa.jpg') {
      this.imagem_pampa = 'assets/gato-do-pampa.jpg';
    } else {
      this.imagem_pampa = 'assets/pampa.jpg';
    }
  }
}
