import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  titulo!: string;
  texto: string | undefined;

  constructor() { }

  ngOnInit(): void {

    this.titulo = 'Aqui o meu titulo enviado por bigode ou interpolacao';
    this.texto = 'Aqui o texto da minha pagina enviado tbm por interpolacao'

  }

}
