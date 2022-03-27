import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from 'src/app/models/product/productResponseModel';
import { Product } from '../../models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  apiUrl="https://localhost:44377/api/products/getall";

  productResponseModel:ProductResponseModel={
    data:this.products,
    message:"",
    success:true
  };

  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ProductResponseModel>{
   return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
