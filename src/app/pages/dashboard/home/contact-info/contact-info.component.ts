import { Component, OnInit, Input } from '@angular/core';
import { Primary } from '../../../../common/interfaces/contacts.interface';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @Input() data: Primary;
  constructor() {}

  ngOnInit(): void {}
}
