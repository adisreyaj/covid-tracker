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
    this.matIconRegistry.addSvgIcon(
      'refresh',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/refresh.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'up',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/up.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'down',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/down.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'arrow_up',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/arrow_up.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'arrow_down',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/arrow_down.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'share_new_tab',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/share_new_tab.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'share',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/share.svg')
    );
  }
}
