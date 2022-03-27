import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category/category';
import { CategoryResponseModel } from '../../models/category/categoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories:Category[]=[];
  apiUrl="https://localhost:44377/api/categories/getall";
  
  categoryResponseModel:CategoryResponseModel={
    data:this.categories,
    message:"",
    success:true
  };

  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<CategoryResponseModel>{
    return this.httpClient.get<CategoryResponseModel>(this.apiUrl);
  }
}
