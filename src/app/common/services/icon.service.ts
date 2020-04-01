import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}
  setupCustomIcons() {
    this.matIconRegistry.addSvgIcon(
      'home',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/home.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'world',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/world.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'stats',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/stats.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/settings.svg')
    );
  }
}
