import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Box } from 'src/app/types/box.type';
import { colors } from 'src/app/constants/color.constant';
import { getRandomNumberBetween } from 'src/app/helper/getRandomNumberBetween';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  @Input() boxes: Box[] = [];
  @Input() lastIndex: number = 1;
  @Output() generate = new EventEmitter<Box>();
  @Output() deleteBox = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  getXY() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    return {
      x: getRandomNumberBetween(0, width - 600),
      y: getRandomNumberBetween(0, height - 200),
    };
  }
  generateColor() {
    let c = getRandomNumberBetween(0, colors.length);
    return colors[c];
  }

  generateBox() {
    let { x, y } = this.getXY();
    let box: Box = {
      id: `boxId_${Date.now()}`,
      color: this.generateColor(),
      x,
      y,
      selected: false,
      zIndex: this.lastIndex++,
    };
    this.generate.emit(box);
  }

  delete(id: string) {
    this.deleteBox.emit(id);
  }
}
