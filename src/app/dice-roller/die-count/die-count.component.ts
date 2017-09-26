import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'dr-die-count',
	templateUrl: './die-count.component.html',
	styleUrls: ['./die-count.component.scss']
})
export class DieCountComponent implements OnInit {

	@Output()
	count: EventEmitter<number> = new EventEmitter<number> ();

	value: number;

	constructor() { }

	ngOnInit() {
		this.onAmountChange(1);
	}

	onAmountChange(value: number): void {
		if (this.value === 0 || this.value === null) {
			this.value = 1;
		}
		
		this.value = value;
		this.count.emit(this.value);
	}

}
