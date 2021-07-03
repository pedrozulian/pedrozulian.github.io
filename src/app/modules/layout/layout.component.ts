import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private isDark = false;

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  constructor() { }

  ngOnInit(): void {
  }

  switchMode(isDarkMode: boolean) {
    this.isDark = isDarkMode;
  }

}
