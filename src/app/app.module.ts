import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DiceRollerModule } from './dice-roller/dice-roller.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		DiceRollerModule
	],
	providers: [

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
