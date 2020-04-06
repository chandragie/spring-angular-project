import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

import { CustomerService } from './customers/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchCustomersComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
