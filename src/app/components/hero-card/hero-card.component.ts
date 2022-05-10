import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  @Output() onDeleteHero: EventEmitter<Hero> = new EventEmitter;
  @Output() onUpdateHero: EventEmitter<Hero> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = 'none'

  onDelete(hero: any) {
    this.onDeleteHero.emit(hero);
  }

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
}
}
