import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';

const routes: Routes = [
  {
    path: 'register-sale',
    component: RegisterSaleComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/new',
    component: ProductFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
