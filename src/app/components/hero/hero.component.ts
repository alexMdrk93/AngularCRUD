import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from 'src/app/services/hero-service.service';
import { Hero } from 'src/app/Hero';
import { tap, map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.heroService.testGetHeroes()
    .pipe(
      tap(res => console.log('before', res)),
      map(heroes => { 
        return heroes.map(
          (hero) => ({
            id: hero.id,
            nume: hero.nume,
            prenume: hero.prenume,
            numeDeErou: hero.numeDeErou,
            numeSuper: hero.SuperPowers[0].numeSuper,
            img: hero.img
          })
        )
      }),
      tap(res => console.log('after', res))
    )
    .subscribe((heroes) => this.heroes = heroes)
  }


  deleteHero(hero: Hero){
    this.heroService
      .deleteHero(hero)
      .subscribe(() => (this.heroes = this.heroes.filter((h) => h.id !== hero.id)))
  }

  updateHero(hero: Hero){
    this.heroService
      .deleteHero(hero)
      .subscribe(() => (this.heroes = this.heroes.filter((h) => h.id !== hero.id)))
  }

  addHero(hero: Hero){
    this.heroService.addHero(hero).subscribe((hero) => (this.heroes.push(hero)));
}

  showEditHero(hero: Hero) {
    const modalRef = this.modalService.open(UpdateModalComponent);
    modalRef.componentInstance.updatedHero = {...hero};
    modalRef.closed.subscribe(updatedHero => {this.heroService.updateHero(updatedHero).subscribe(
      ()=>{this.heroes = this.heroes.map(
        (h) => {if (h.id === updatedHero.id){return updatedHero}
      return h}
      )}
    )})
    }

}
