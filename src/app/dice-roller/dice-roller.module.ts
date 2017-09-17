import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiceRollerComponent } from './dice-roller.component';
import { DieComponent } from './die/die.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		DiceRollerComponent,
		DieComponent
	],
	exports: [
		DiceRollerComponent
	]
})
export class DiceRollerModule { }
