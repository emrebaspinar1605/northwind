import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/ListResponseModel/listResponseModel';
import { Product } from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl="https://localhost:44377/api/";



  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl + "products/getall"
   return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl+"products/getall");
  }
  getProductsByCategory(categoryId:Number):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl+"products/getbycategory?categoryId="+categoryId);
   }
}
