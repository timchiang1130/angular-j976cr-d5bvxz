import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private cookieValue: string;

  constructor(
    private cookieService: CookieService
  ){}

  public ngOnInit(): void {
    this.cookieService.put('CRMSSO', 'our cookie value');
    localStorage.setItem('CRMSSO', 'our cookie value');

  }

  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/