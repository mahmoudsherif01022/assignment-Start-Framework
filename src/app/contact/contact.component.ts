import { Component } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [StartComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  titleContact: string = 'conatct section';
  colorContact: string = '#2c3e50';

  userNameValue: string = '';
  userAgeValue: string = '';
  userEmailValue: string = '';
  userPasswprdValue: string = '';
}
