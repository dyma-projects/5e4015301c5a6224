import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public result: number;
  @Output() public showResult:  EventEmitter<number> = new EventEmitter();

  counter :number= 0;
  constructor() { }

  ngOnInit() {
  }
  calculateAddition() { 
    this.counter = this.counter + 1;
    this.showResult.emit(this.counter);
  }
  calculateSubstraction() {
    this.counter = this.counter - 1;
    this.showResult.emit(this.counter);
  }
}
