import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural-deriectives',
  templateUrl: './structural-deriectives.component.html',
  styleUrls: ['./structural-deriectives.component.css']
})
export class StructuralDeriectivesComponent implements OnInit {

  switchValue = false;
  switchValue2 = true;
  
  constructor() { }

  ngOnInit() {
  }
  myOnclick() {
    this.switchValue2 = !this.switchValue2;
    console.log(this.switchValue2);
  }
}
