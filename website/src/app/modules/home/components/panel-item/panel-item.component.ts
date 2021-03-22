import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.css']
})
export class PanelItemComponent implements OnInit {

  constructor() { }

  @Input() image: string;
  @Input() imageAlt: string;
  @Input() title: string;
  @Input() description: string;
  @Input() path: string;

  ngOnInit(): void {
  }

  getSrcImage() {
    return '../../../../../assets/undraw/' + this.image;
  }

}
