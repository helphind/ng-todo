import { Component, inject, OnInit } from '@angular/core';
import { Product } from "../../models/product.interface";
import { ApiService } from "../../services/api.service";

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

    private apiService = inject(ApiService);

    productList!: Product;

    ngOnInit() {
        this.getProductsList();
    }

    private getProductsList() {
        this.apiService.getProductList();
    }

}
