import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
}) 
export class AppComponent {
  title: string  = 'Contador App';
  numero: number = 10;

  public base: number = 5;

  sumar() {
    this.numero += 1;
  }

  acumular (valor: number){
    this.numero += valor;
  }
}
