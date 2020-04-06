import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: Observable<Customer[]>;

  constructor(private service: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.service.getCustomersList();
  }

  deleteCustomers() {
    this.service.deleteAll().subscribe(
      data => {
        console.log(data);
        this.navigateToAdd();
      },
      error => console.log('ERROR:' + error)
    );
  }

  navigateToAdd() {
    this.router.navigate(['add']);
  }
}
