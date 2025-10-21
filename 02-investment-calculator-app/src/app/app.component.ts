import { Component, signal } from '@angular/core';
import type { InvestmentResult } from './investment-input.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);
}
