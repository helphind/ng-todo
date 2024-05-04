import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Product } from "../../models/product.interface";

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

    private apiService = inject(ApiService)

    productId!: string;

    productDetails!: Product;

    ngOnInit() {
        this.apiService.getProductDetails(this.productId).subscribe((res: Product) => {
            this.productDetails = res
        })
    }

}
