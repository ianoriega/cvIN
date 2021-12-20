import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  Info: string[] = [""];

  constructor() { }

  ngOnInit(): void {
  }


  GetInfoPersonal() : void
  {
    this.Info = 
    [
      "Nombre: Iñaki Andres Noriega",
      " "," ",
      "Edad: 32 años",
      " "," ",
      "Domicilio: Wilde, Avellaneda, Buenos Aires",
      "Nacionalidad: Argentina",
      " "," ",
      "Telefono: 15 6902 1342",
      " "," ",
      "Email: iandresnoriega@gmail.com"
    ];
  }

  GetAcercaDeMi() : void
  {
    this.Info = 
    [
      "Desde principio del 2021 después de muchos años trabajando como vendedor, decidí buscar un "+ 
      "cambio a nivel profesional. Así fue como me encontre con la Tecnicatura Superior en "+
      "Programación dictada por la Universidad Tecnológica Nacional (UTN)",
      "",
      "Encarando algo nuevo y desconocido en un principio, encontré ésta disciplina que me atrapó.", 
      "Programar me resulta muy estimulante, y me motiva a seguír avanzando, aprendiendo y dominando"+
      " las tecnologías.",
      "",
      "En la actualidad estoy buscando mi primer trabajo IT que me permita sacar a ruedo todo mi "+ 
      "conocimiento y habilidad, que a demás me permita seguir creciendo y aprendiendo hasta convertirme"+
      " en un profesional Sr."
    ];
  }

  GetConocimientos() : void
  {
    this.Info = 
    [
      "Programación orientada a objetos",
      "Full Stack con C# .NET y Angular",
      "Base de datos con SQL",
      "Control de versiones con GIT",
      "C, C#, Typescript, Javascript, Java, Ruby, HTML, CSS y más!"
    ];
  }

  GetOtrasExp() : void
  {
    this.Info = 
    [
      "Participando de Argentina Programa 2da Etapa: #YoProgramo",
      "Cajero/Repositor en Carrefour 2019/2020",
      "Vendedor/AuxiliarStock en Musimundo 2012/2019"
    ];
  }
}
