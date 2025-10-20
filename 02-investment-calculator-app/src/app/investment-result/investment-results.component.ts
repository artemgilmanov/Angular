import { Component, Input } from '@angular/core';
import type { InvestmentResult } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentResult[];
}
