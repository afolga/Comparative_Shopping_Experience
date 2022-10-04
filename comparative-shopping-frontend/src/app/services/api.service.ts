import { API_BASE_URL } from './../../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/shoewizard';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mock_allProducts: Array<Product> = [
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: "99", imageUrl: "https://picsum.photos/200", description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: "99", imageUrl: "https://picsum.photos/200", description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: "99", imageUrl: "https://picsum.photos/200", description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: "99", imageUrl: "https://picsum.photos/200", description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: "99", imageUrl: "https://picsum.photos/200", description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: "99", imageUrl: "https://picsum.photos/200", description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: "99", imageUrl: "https://picsum.photos/200", description: "This is a shoe"},    
  ]
  constructor(private http: HttpClient) { }

  getAllProducts(searchKeyword: string): Observable<Product[]> {

    return of(this.mock_allProducts);
    
    // let url: string = API_BASE_URL
    // return this.http.get(`url/${searchKeyword}`)
  }
}
