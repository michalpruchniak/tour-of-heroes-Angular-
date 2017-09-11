import { Component, Input } from '@angular/core';
 
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <ng-template #hidden>
        <p>Brak elementów do wyświetlenia</p>
    </ng-template>
    <div *ngIf="hero; else hidden">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}