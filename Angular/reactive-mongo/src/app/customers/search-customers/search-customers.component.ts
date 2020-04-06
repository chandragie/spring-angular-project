import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {
  customers: Observable<Customer[]>;
  name: string;

  constructor(private service: CustomerService) {}

  ngOnInit(): void {
    this.name = '';
  }

  search() {
    this.customers = this.service.findCustomers(this.name);
  }
}
