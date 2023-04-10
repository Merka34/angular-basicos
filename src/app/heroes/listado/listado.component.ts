import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];


  constructor(){
    console.log('constructor');
  }

  ngOnInit(){
    console.log('listado');
  }

  borrarHeroe(){
    //this.heroes = this.heroes.filter(x=>x != 'Thor');
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);

  }
}
