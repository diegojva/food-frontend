import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterSaleComponent } from './register-sale/register-sale.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { TestVentasComponent } from './test-ventas/test-ventas.component';
import { GenerateOrdersComponent } from './generate-orders/generate-orders.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListOrdersComponent } from './generate-orders/list-orders/list-orders.component';


@NgModule({
  declarations: [
    LayoutComponent,
    RegisterSaleComponent,
    ProductComponent,
    ProductFormComponent,
    DashboardComponent,
    LoginComponent,
    NotificationsComponent,
    ReportsComponent,
    AboutComponent,
    TestVentasComponent,
    GenerateOrdersComponent,
    ListOrdersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatGridListModule
  ]
})
export class PagesModule { }
