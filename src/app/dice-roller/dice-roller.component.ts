import { Component, OnInit } from '@angular/core';

import { dice } from './data/dice.data';
import { Die } from './models/die.interface';

@Component({
	selector: 'dr-dice-roller',
	templateUrl: './dice-roller.component.html',
	styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

	dice: Die[];
	roll: number;

	constructor() {
	}

	ngOnInit() {
		this.dice = dice;
	}

	handleRoll(event: number): void {
		this.roll = event;
	}

}
