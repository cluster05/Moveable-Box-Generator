import { Component, ElementRef } from '@angular/core';
import { Box } from 'src/app/types/box.type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  boxes: Box[] = [];
  lastIndex = 1;
  dragabble: ElementRef = new ElementRef('');

  constructor() {}

  ngOnInit() {
    window.addEventListener('keyup', this.keyEvent.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('keyup', this.keyEvent.bind(this));
  }

  keyEvent(event: KeyboardEvent) {
    if (!this.dragabble.nativeElement) return;

    let { top, left } = this.getCurrentElementXY();

    switch (event.key) {
      case 'w': {
        if (top - 25 < 0) return;
        this.dragabble.nativeElement.style.top = `${top - 25}px`;
        break;
      }
      case 's': {
        if (top + 25 > window.innerHeight - 150) return;
        this.dragabble.nativeElement.style.top = `${top + 25}px`;
        break;
      }
      case 'a': {
        if (left - 25 < 0) return;
        this.dragabble.nativeElement.style.left = `${left - 25}px`;
        break;
      }
      case 'd': {
        if (left + 25 > window.innerWidth - 540) return;
        this.dragabble.nativeElement.style.left = `${left + 25}px`;
        break;
      }
      case 'Delete': {
        this.delete(this.dragabble.nativeElement.id);
      }
    }
  }

  getCurrentElementXY() {
    let top = parseInt(this.dragabble.nativeElement.style.top.split('px')[0]);
    let left = parseInt(this.dragabble.nativeElement.style.left.split('px')[0]);
    return { top, left };
  }
  generate(box: Box) {
    this.boxes.push(box);
  }
  delete(id: string) {
    let index = this.boxes.findIndex((box) => box.id === id);
    this.boxes.splice(index, 1);
  }
  selected(id: string) {
    for (let i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i].id === id) {
        this.boxes[i].selected = true;
        this.boxes[i].zIndex = this.lastIndex++;

        this.dragabble = new ElementRef(
          document.getElementById(this.boxes[i].id)
        );
      } else {
        this.boxes[i].selected = false;
      }
    }
    this.boxes = [...this.boxes];
  }
}
