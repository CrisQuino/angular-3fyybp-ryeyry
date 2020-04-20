import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { products } from '../products';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  headers: HttpHeaders;

  constructor(
    private dataService: DataService
  ) { }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    console.log(this.dataService.getAllProducts());
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/