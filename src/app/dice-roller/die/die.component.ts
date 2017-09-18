import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Die } from '../models/die.interface';

@Component({
	selector: 'dr-die',
	templateUrl: './die.component.html',
	styleUrls: ['./die.component.scss']
})
export class DieComponent implements OnInit {
	@HostBinding('class') dieClass = 'die';

	@Input()
	die: Die[];

	counts: number[];

	constructor() { }

	ngOnInit() {
		this.counts = [1, 2, 3, 4, 5];
	}

}
