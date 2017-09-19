import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiceRollerComponent } from './dice-roller.component';
import { DieComponent } from './die/die.component';
import { DieCountComponent } from './die-count/die-count.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DiceRollerComponent,
		DieComponent,
		DieCountComponent
	],
	exports: [
		DiceRollerComponent
	]
})
export class DiceRollerModule { }
