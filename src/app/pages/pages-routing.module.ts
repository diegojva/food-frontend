import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';
import { ReportsComponent } from './reports/reports.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
