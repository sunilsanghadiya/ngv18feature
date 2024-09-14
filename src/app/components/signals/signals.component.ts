import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit{

  //Signals variables
  count = signal(0)

  //computed signal
  doubleCount = computed(() => this.count() * 2)

  constructor() {

  }

  ngOnInit() {
    
  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }

}
