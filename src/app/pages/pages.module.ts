import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterSaleComponent } from './register-sale/register-sale.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form/product-form.component';


@NgModule({
  declarations: [
    LayoutComponent,
    RegisterSaleComponent,
    ProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class PagesModule { }
