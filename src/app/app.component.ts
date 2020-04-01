import { Component } from '@angular/core';
import { IconService } from './common/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private iconsService: IconService) {
    this.iconsService.setupCustomIcons();
  }
}
