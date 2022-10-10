import { RangeSliderOptions } from './../../../shoewizard.interfaces';
import { ApiService } from './../../services/api.service';
import { Product } from '../../../shoewizard.interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Variables controlling the state of the page
  // currentSearch: string = '';
  allProducts: Array<Product> = []; // Array of all products 
  filteredProducts!: Observable<Product[]>; // Array of filtered products

  priceSliderOptions: RangeSliderOptions = { lowValue: 200, highValue: 500} // USD
  distanceSliderOptions: RangeSliderOptions = { lowValue: 20, highValue: 50} // miles

  filterForm: FormGroup = new FormGroup({
    // priceRange: new FormGroup({
    //   priceLow: new FormControl(10),
    //   priceHigh: new FormControl(100)
    // }),
    // distanceRange: new FormGroup({
    //   distanceLow: new FormControl(1),
    //   distanceHigh: new FormControl(10)
  // }),
    currentSearch: new FormControl(''),
    sources: new FormGroup({
      amazon: new FormControl(false),
      shein: new FormControl(false),
      brooks: new FormControl(false),
      hoka: new FormControl(false)
    }),
    colors: new FormGroup({
      black: new FormControl(false),
      white: new FormControl(false),
      yellow: new FormControl(false),
    }),
    categories: new FormGroup({
      running: new FormControl(false),
      dress: new FormControl(false),
      casual: new FormControl(false),
      lifting: new FormControl(false),
    }),
    stores: new FormGroup({
      halsted: new FormControl(false),
      maxwell: new FormControl(false),
      taylor: new FormControl(false),
      navy_pier: new FormControl(false),
    }),
  })

  get isSearchResultsEmpty() {
    return this.filterForm.controls['currentSearch'].value.length < 1
  }

  // Constructor runs 1 time when a component is launched
  constructor(private apiService: ApiService, private _formBuilder: FormBuilder) { 
  }

  // Runs before a page is rendered
  ngOnInit(): void {
    this.filteredProducts = this.filterForm.valueChanges.pipe(
      startWith(null),
      map(filters => {
        return ( filters ? this._filterProducts(filters) : this.allProducts.slice())
      })
    );
  }

  private _filterProducts(filters: any): Product[] {
    return this.allProducts.filter(product => {
       return this.isMatching(product, filters) == true
    });
  }

  isMatching(product: Product, filters: any): boolean {
    let isValidProduct = false;

    if (product.name.toLowerCase().includes(filters.currentSearch.toLowerCase())) return true

    for (let c of product.categories) {if (filters.categories[c] == true) return true}
    for (let c of product.stores) {if (filters.stores[c] == true) return true}
    for (let c of product.sources) {if (filters.sources[c] == true) return true}
    for (let c of product.colors) {if (filters.colors[c] == true) return true}
    
    if (product.distance >= this.distanceSliderOptions.lowValue && product.distance <= this.distanceSliderOptions.highValue) {
       return true;
    }

    if (product.lowestPrice >= this.priceSliderOptions.lowValue && product.lowestPrice <= this.priceSliderOptions.highValue) {
     return true;
    }
    return isValidProduct;
  }

  onPriceSliderChanges(e: RangeSliderOptions) {
    this.priceSliderOptions = e;
    // TODO: Update Search Filters
  }

  onDistanceSliderChanges(e: RangeSliderOptions) {
    this.distanceSliderOptions = e;
    // TODO: Update Search Filters
  }
  
  searchProducts() {
    this.apiService.getAllProducts(this.filterForm.controls['currentSearch'].value)?.subscribe(all => {
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
