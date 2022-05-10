import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { HeroServiceService } from './services/hero-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MarvelHeroes';

  constructor(private heroservice: HeroServiceService){
    
  }

  ngOnInit(){
    // this.heroservice.testGetHeroes()
    // .pipe(
    //   tap(res => console.log('before', res)),
    //   map(heroesFromServer => { 
    //     return heroesFromServer.map(
    //       (hero) => ({
    //         id: hero.id,
    //         nume: hero.nume,
    //         prenume: hero.prenume,
    //         numeDeErou: hero.numeDeErou,
    //         numeSuper: hero.SuperPowers[0].numeSuper
    //       })
    //     )
    //   }),
    //   tap(res => console.log('after', res))
    // )
    // .subscribe()
  }


}
