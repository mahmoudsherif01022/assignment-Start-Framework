import { Component } from '@angular/core';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-portfolio',
  imports: [StartComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  titlePortfolio: string = 'Portfolio component';
  colorPortfolio: string = '#2c3e50';
  portfolioSrcImg: string[] = [
    '/img/poert1.png',
    '/img/port2.png',
    '/img/port3.png',
    '/img/poert1.png',
    '/img/port2.png',
    '/img/port3.png',
  ];
  modelimg: string = '';
}
