import { API_BASE_URL } from './../../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/shoewizard.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mock_allProducts: Array<Product> = [
    {_id:"1", name: "HOKA Men's Clifton 8", lowestPrice: 139.99, imageUrl: "../../assets/hoka8.png", colors: ["black", "yellow", "white"], sources: ["amazon"], categories: ["running", "casual"], distance: 10, stores:["halsted"] ,description: "This is a shoe"},
    {_id:"1", name: "Brooks Men's Ghost 14", lowestPrice: 99, imageUrl: "../../assets/ghost14.png", colors: ["black", "yellow", "white"], sources: ["amazon"], categories: ["running", "casual"], distance: 10, stores:["halsted"] ,description: "This is a shoe"},
    {_id:"1", name: "Nike Zoom Freak 4", lowestPrice: 125, imageUrl: "../../assets/nikezoomfreak4.png", colors: ["black", "yellow", "white"], sources: ["amazon"], categories: ["running", "casual"], distance: 10, stores:["halsted"] ,description: "This is a shoe"},
    {_id:"1", name: "Under Armour Curry 3Z6", lowestPrice: 79.99, imageUrl: "../../assets/underarmourcurry.png", colors: ["black", "yellow", "white"], sources: ["amazon"], categories: ["running", "casual"], distance: 10, stores:["halsted"] ,description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: 99, imageUrl: "https://picsum.photos/200", colors: ["black", "yellow", "white"], sources: ["amazon"], categories: ["running", "casual"], distance: 10, stores:["halsted"] ,description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: 99, imageUrl: "https://picsum.photos/200", colors: ["black", "yellow", "white"], sources: ["amazon"], categories: ["running", "casual"], distance: 10, stores:["halsted"] ,description: "This is a shoe"},
    {_id:"1", name: "Hoka Bondi 7", lowestPrice: 99, imageUrl: "https://picsum.photos/200", colors: ["black", "yellow", "white"], sources: ["amazon"], categories: ["running", "casual"], distance: 10, stores:["halsted"] ,description: "This is a shoe"},    
  ]
  constructor(private http: HttpClient) { }

  getAllProducts(searchKeyword: string): Observable<Product[]> {

    return of(this.mock_allProducts);
    
    // let url: string = API_BASE_URL
    // return this.http.get(`url/${searchKeyword}`)
  }
}
