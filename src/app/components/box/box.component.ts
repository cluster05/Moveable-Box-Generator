import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Box } from 'src/app/types/box.type';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() box: Box = {
    color: '',
    id: '',
    selected: false,
    x: 0,
    y: 0,
    zIndex: 0,
  };
  @Output() selected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  select(id: string) {
    this.selected.emit(id);
  }
}
