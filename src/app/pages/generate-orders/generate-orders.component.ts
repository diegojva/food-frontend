import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { GenerateOrderService } from 'src/app/service/generate-order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-generate-orders',
  templateUrl: './generate-orders.component.html',
  styleUrls: ['./generate-orders.component.css']
})
export class GenerateOrdersComponent implements OnInit {

  formRegister: FormGroup;
  date : Date = new Date();

  product?: any;

  state$: Observable<object>;

  constructor(private activateRouter: ActivatedRoute,
              private productService: ProductService,
              private orderService: GenerateOrderService) { }

  ngOnInit(): void {
    this.initForm();
    this.product =   JSON.parse(localStorage.getItem('product'));
    this.formRegister.patchValue({
      product: this.product.productName,
      shop: this.product.shopName
    });
  }

  initForm(){
    this.formRegister = new FormGroup({
      product: new FormControl({value: null, disabled: true}, [Validators.maxLength(150)]),
      cant: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.pattern('^[0-9]*$')]),
      shop: new FormControl({value: null, disabled: true}, [Validators.maxLength(150)]),
    });
  }
  
  searchProduct(){
    this.activateRouter.paramMap.subscribe(params => {
      this.productService.getProduct(Number(params.get('id'))).subscribe(product => {
        console.log(product);
      });
    });
  }

  createOrder(){
    let order ={
      productId : this.product.productId,
      shopId : this.product.shopId,
      productName : this.product.productName,
      shopName : this.product.shopName,
      cant : this.formRegister.value.cant,
    }
    this.orderService.registerOrder(order).subscribe(data => {
        console.log(data);
    });
  }

}
