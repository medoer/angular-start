import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: ['./angular-router.component.css']
})
export class AngularRouterComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        
      }
    );
  }

}
