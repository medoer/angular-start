import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'angular-router',
  templateUrl: './angular-router.component.html',
  styleUrls: ['./angular-router.component.css']
})
export class AngularRouterComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        console.log(params);
      }
    );
    setTimeout(() => {
      // this._router.navigateByUrl('/');
    }, 1000);
  }

}
