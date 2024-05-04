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

    createProduct(productInfo: any) {
        const endpoint = this.API_BASE + 'products';
        return this.http.post(endpoint, productInfo)
    }

    updateProduct(productInfo: any) {
        const endpoint = this.API_BASE + 'products';
        return this.http.post(endpoint, productInfo)
    }

    getProductList() {
        const endpoint = `${this.API_BASE}products`;
        return this.http.get(endpoint)
    }

    getProductDetails(productId: string): Observable<Product> {
        const endpoint = `${this.API_BASE}products/${productId}`;
        return this.http.get<Product>(endpoint)
    }


}
