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

	constructor() {
	}

	ngOnInit() {
		this.dice = dice;
	}

}
