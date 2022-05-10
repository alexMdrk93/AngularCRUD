import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
@Output() onAddHero: EventEmitter<Hero> = new EventEmitter();

  nume!: string;
  prenume!: string;
  numeDeErou!: string;
  numeSuper!: string;
  img!: string;
  showAddHero!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddHero = value))
  }

  ngOnInit(): void {
  }

onSubmit() {
  if(!this.nume){
    alert('Please add details');
    return;
  }

  const newHero = {
    nume: this.nume,
    prenume: this.prenume,
    numeDeErou: this.numeDeErou,
    numeSuper: this.numeSuper,
    img: this.img
  }

  this.onAddHero.emit(newHero);

  this.nume='';
  this.prenume='';
  this.numeDeErou='';
  this.numeSuper='';
  this.img=''

}

}
