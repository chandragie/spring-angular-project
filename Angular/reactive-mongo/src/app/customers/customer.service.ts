import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Customer } from './customer';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerList: Customer[] = new Array();
  private customerListSearch: Customer[] = new Array();

  constructor(private http: HttpClient, private _zone: NgZone) {}

  createCustomer(customer: object): Observable<object> {
    return this.http.post(`${apiUrl}` + `/create`, customer);
  }

  updateCustomer(id: string, value: any): Observable<object> {
    return this.http.put(`${apiUrl}` + `${id}`, value);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${apiUrl}` + `${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    this.customerList = new Array();

    return Observable.create(observer => {
      const eventSource = new EventSource(`${apiUrl}`);
      eventSource.onmessage = event => {
        this._zone.run(() => {
          console.log('eventSource.onmessage: ', event);
          const json = JSON.parse(event.data);
          this.customerList.push(
            new Customer(json['id'], json['name'], json['age'], json['active'])
          );
          observer.next(this.customerList);
        });
      };

      // this always rise error on console
      // check https://stackoverflow.com/a/26144536/10298183
      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error('eventSource.onerror: ' + error);
        });
      };
      return () => eventSource.close();
    });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${apiUrl}` + `/delete`, { responseType: 'text' });
  }

  findCustomers(name): Observable<any> {
    this.customerListSearch = new Array();

    return Observable.create(observer => {
      const eventSource = new EventSource(
        `${apiUrl}` + `/findbyname?name=` + name
      );
      eventSource.onmessage = event => {
        this._zone.run(() => {
          console.log('eventSource.onmessage: ' + event);
          const json = JSON.parse(event.data);
          this.customerListSearch.push(
            new Customer(json['id'], json['name'], json['age'], json['active'])
          );
          observer.next(this.customerListSearch);
        });
      };

      // this always rise error on console
      // check https://stackoverflow.com/a/26144536/10298183
      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error('eventSource.onerror:' + error);
        });
      };
      return () => eventSource.close();
    });
  }
}
