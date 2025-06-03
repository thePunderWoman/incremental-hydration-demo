import { Component } from '@angular/core';
import { addLoadedCount, addHydratedCount } from '../app.component';

addLoadedCount();

@Component({
  selector: 'details-cmp',
  standalone: true,
  imports: [],
  templateUrl: './details-cmp.component.html',
  styleUrl: './details-cmp.component.scss',
})
export class DetailsCmp {
  constructor() {
    console.log('hydrated details');
    addHydratedCount();
  }
}
