import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  dblclickText: string = 'init';
  color: string = 'lightblue';
  error: string = '';
  _isSpinning: boolean = false;
  bf: string = 'init';
  constructor() { }

  ngOnInit() {
  }

  myOndblclick() {
    this.dblclickText = "dblclick";
  }
  myOnclick() {
    this.dblclickText = "click";
  }

  myOnblur($event, color) {
    let $target = $event.target;
    $target.style.backgroundColor = color;
    this.bf = 'blur';
  }

  myOnfocus($event, color) {
    let $target = $event.target;
    $target.style.backgroundColor = color;
    this.bf = 'focus';
  }

  myOnchange($event) {
    let $target = $event.target;
    $target.style.backgroundColor = this.color;
  }

  myOnerror() {
    this.error = 'image error';
    this._isSpinning = true;
  }

  myOnkeydown() {
    this.error = 'stoped';
    this._isSpinning = false;
  }
}
