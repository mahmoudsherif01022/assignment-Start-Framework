import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent {
  @Input() titeStart: string = '';
  @Input() customColor: string = '';
}
