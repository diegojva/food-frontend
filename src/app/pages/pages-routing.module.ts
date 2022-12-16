import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenerateOrdersComponent } from './generate-orders/generate-orders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';
import { ReportsComponent } from './reports/reports.component';
import { TestVentasComponent } from './test-ventas/test-ventas.component';

const routes: Routes = [
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/new',
    component: ProductFormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardService],
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'venta',
    component: TestVentasComponent,
  },
  {
    path: 'product/generate-order/:id', 
    component: GenerateOrdersComponent,
  },
  {
    path: 'product/generate-order', 
    component: GenerateOrdersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
