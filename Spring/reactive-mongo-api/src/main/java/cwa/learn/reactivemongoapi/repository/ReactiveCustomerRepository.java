package cwa.learn.reactivemongoapi.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import cwa.learn.reactivemongoapi.model.Customer;
import reactor.core.publisher.Flux;

/**
 * ReactiveCustomerRepository
 */
public interface ReactiveCustomerRepository extends ReactiveCrudRepository<Customer, String> {

    Flux<Customer> findByName(String name);
}