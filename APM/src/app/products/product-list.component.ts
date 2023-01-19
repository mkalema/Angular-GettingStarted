import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  pageTitle:string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage:boolean = false;

  private _listFilter: string = '';
  products: IProduct[] = [];

  errorMessage: string = '';

  sub!: Subscription;

  // service and dependency injection
  constructor(private productService: ProductService){

  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  toggleImage(){
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
    //this._listFilter = 'cart';
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
