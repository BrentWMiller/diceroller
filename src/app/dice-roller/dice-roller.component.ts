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

	diceCount: number;

	roll: number;
	minRoll: number = 1;
	maxRoll: number;
	diceRolls: number[];
	totalRoll: number;

	rollHistory: number[];

	constructor() {
	}

	ngOnInit() {
		this.dice = dice;
		this.selectedDice = [];
		this.rollHistory = [];
	}

	// Handles the selected dice
	handleSelect(event: number): number[] {

		if (this.selectedDice.includes(event)) {

			// Remove die if it already exists.
			this.selectedDice = this.selectedDice.filter((die: number) => {
				return die !== event;
			});

		} else {

			// Add die if it doesn't exist.
			this.selectedDice = this.selectedDice.concat(event);
			return this.selectedDice;

		}
	}

	// Handles the amount of dice to roll
	handleDiceCount(value: number): number {
		this.diceCount = value;
		return this.diceCount;
	}

	// Rolls the selected dice and returns the sum of all rolls
	rollDice(): number {
		this.diceRolls = [];
		
		for (var i = 0; i < this.selectedDice.length; i++) {
			// Set max roll
			this.maxRoll = this.selectedDice[i];

			for (var i = 0; i < this.diceCount; i++) {
				
				// Calculate roll
				this.roll = Math.floor(Math.random() * (this.maxRoll - this.minRoll + 1)) + this.minRoll;

				// Add roll to dice rolls array
				this.diceRolls = this.diceRolls.concat(this.roll);
			}
		}

		this.totalRoll = this.diceRolls.reduce( (acc, cur) => acc + cur, 0);

		// Push roll to history
		this.addToHistory(this.totalRoll);

		return this.totalRoll;
	}

	addToHistory(roll): number[] {
		this.rollHistory = this.rollHistory.concat(roll);
		return this.rollHistory;
	}

}
