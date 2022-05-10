import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'SuperHeroesNG';
  showAddHero: boolean = false;
  subscription: Subscription;

    constructor(private uiService: UiService, ) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddHero = value))
   }

  ngOnInit(): void {
  }

  toggleAddHero(){
    this.uiService.toggleAddHero();
  }

  // hasRoute(route:string) {
  //   return this.router.url === route;
  // }

}
