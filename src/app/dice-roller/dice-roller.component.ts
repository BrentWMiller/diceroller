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

	selectedDie: number;
	selectedDice: number[];

	constructor() {
	}

	ngOnInit() {
		this.dice = dice;
		this.selectedDice = [];
	}

	handleSelect(event: number): number[] {

		if (this.selectedDice.includes(event)) {

			//Remove die if it already exists.
			this.selectedDice = this.selectedDice.filter((die: number) => {
				return die !== event;
			});

		} else {

			//Add die if it doesn't exist.
			this.selectedDice = this.selectedDice.concat(event);
			return this.selectedDice;

		}
	}

}
