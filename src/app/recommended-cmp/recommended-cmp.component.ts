import { Component } from '@angular/core';
import { addLoadedCount, addHydratedCount } from '../app.component';

addLoadedCount();

@Component({
  selector: 'recommended-cmp',
  standalone: true,
  imports: [],
  templateUrl: './recommended-cmp.component.html',
  styleUrl: './recommended-cmp.component.scss',
})
export class RecommendedCmp {
  constructor() {
    addHydratedCount();
  }
}
