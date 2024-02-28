import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor'];
  public lastHeroRevomed?: string = '';

  removeLastHero(): void{
    this.lastHeroRevomed = this.heroNames.pop();
  }
}
