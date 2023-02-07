import { Component, Input } from '@angular/core';

import { PictureData } from 'src/app/home/interfaces/picture-data';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent {
  @Input() picture!: PictureData
  @Input() numberForClass!: number
}
