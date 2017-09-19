import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Die } from '../models/die.interface';

@Component({
	selector: 'dr-die',
	templateUrl: './die.component.html',
	styleUrls: ['./die.component.scss']
})
export class DieComponent {

	@Input()
	die: Die[];

	@Output()
	roll: EventEmitter<number> = new EventEmitter<number> ();

	min: number = 1;
	max: number;

	constructor() { }

	onRoll(value: number): void {
		this.max = value;
		this.roll.emit(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
	}

}
