import { ApiService } from './../../services/api.service';
import { Product } from './../../../shoewizard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Variables controlling the state of the page
  currentSearch: string = '';
  allProducts: Array<Product> = []; // Array of all products returned on current search

  // Constructor runs 1 time when a component is launched
  constructor(private apiService: ApiService) { }

  // Runs before a page is rendered
  ngOnInit(): void {
  }

  searchProducts() {
    this.apiService.getAllProducts(this.currentSearch)?.subscribe(all => {
      this.allProducts = all
    })
  }
  // // Runs after a page is rendered
  // ngAfterViewInit(): void {

  // }

  // // Runs when a component is destroyed (for example when you navigate to a different component)
  // ngOnDestroy(): void {

  // }

}
