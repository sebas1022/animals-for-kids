import { animate, style, transition, trigger, state } from '@angular/animations';

export const MICROANIMATION = trigger('openClose', [
	state('grabando', style({
		width: '25%',
		marginLeft: '37.5%'
	})),
	state('no-grabando', style({
		width: '100%',
	})),
	transition('grabando => no-grabando', [
		animate('1s')
	]),
	transition('no-grabando => grabando', [
		animate('1s')
	]),
]);
