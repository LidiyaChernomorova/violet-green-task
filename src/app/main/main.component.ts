import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public settedColor: string;
  public items: number[];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.items = this.mainService.getItems();
    this.settedColor = this.mainService.getColor();
  }
}
