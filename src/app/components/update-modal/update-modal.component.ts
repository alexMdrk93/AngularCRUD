import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Hero } from 'src/app/Hero';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  @Input() updatedHero!: Hero;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
