import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Die } from '../models/die.interface';

@Component({
	selector: 'dr-die',
	templateUrl: './die.component.html',
	styleUrls: ['./die.component.scss']
})
export class DieComponent {

	@Input()
	die: Die;

	@Output()
	select: EventEmitter<number> = new EventEmitter<number> ();

	selected: boolean;

	constructor() { }

	selectDie(value: number): void {
		this.selected = !this.selected;

		this.select.emit(value);
	}

}
