import { Component } from "@angular/core";

import { ProductService } from "../product.service";

@Component({
  selector: "pm-product-detail",
  templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent {
  pageTitle = "Frame Detail";
  errorMessage = "";
  product;

  constructor(private productService: ProductService) {}
}
