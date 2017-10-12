import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

const init_options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }],
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }],
  }],
}];

const other_options = [{
  value: 'fujian',
  label: 'Fujian',
  children: [{
    value: 'xiamen',
    label: 'Xiamen',
    children: [{
      value: 'Kulangsu',
      label: 'Kulangsu',
      isLeaf: true
    }],
  }],
}, {
  value: 'guangxi',
  label: 'Guangxi',
  children: [{
    value: 'guilin',
    label: 'Guilin',
    children: [{
      value: 'Lijiang',
      label: 'Li Jiang River',
      isLeaf: true
    }],
  }],
}];

@Component({
  selector: 'create-graph',
  templateUrl: './create-graph.component.html',
  styleUrls: ['./create-graph.component.css']
})
export class CreateGraphComponent implements OnInit {

  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;
  graphStyleArray = [];
  eventArray = [];
  
  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 6) : true;
    })
  }

  resetForm() {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, Validators.required ]
    });

    this.graphStyleArray.push(
      {iconClass: 'anticon-line-chart', graphStyleName: '线图'}
    );
    this.graphStyleArray.push(
      {iconClass: 'anticon-area-chart', graphStyleName: 'area'}
    );
    this.graphStyleArray.push(
      {iconClass: 'anticon-pie-chart', graphStyleName: '饼图'}
    );
    this.graphStyleArray.push(
      {iconClass: 'anticon-bar-chart', graphStyleName: '柱状图'}
    );
    this.graphStyleArray.push(
      {iconClass: 'anticon-dot-chart', graphStyleName: '散点图'}
    );
    
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }

     // let's set nzOptions in a asynchronous  way
     setTimeout(() => {
      this._options = init_options;
    }, 100);
  }

   /** init data */
   _options = null;
   
     _value: any[] = null;
   
     _console(value) {
       console.log(value);
     }
   
     _changeNzOptions(): void {
       if (this._options === init_options) {
         this._options = other_options;
       } else {
         this._options = init_options;
       }
     }

}
