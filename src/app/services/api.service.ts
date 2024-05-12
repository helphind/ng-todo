import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    API_BASE:string = 'https://fakestoreapi.com/'

    constructor(private http: HttpClient) {
    }

    createProduct(productInfo: any) : Observable<Product>{
        const endpoint = this.API_BASE + 'products';
        return this.http.post<Product>(endpoint, productInfo)
    }

    updateProduct(productInfo: any): Observable<Product> {
        const endpoint = this.API_BASE + 'products';
        return this.http.post<Product>(endpoint, productInfo)
    }

    getProductList(): Observable<Product[]> {
        const endpoint = `${this.API_BASE}products`;
        return this.http.get<Product[]>(endpoint)
    }

    getProductDetails(productId: string): Observable<Product> {
        const endpoint = `${this.API_BASE}products/${productId}`;
        return this.http.get<Product>(endpoint)
    }


}
