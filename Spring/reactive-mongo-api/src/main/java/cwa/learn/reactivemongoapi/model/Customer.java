package cwa.learn.reactivemongoapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Customer
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "customer")
public class Customer {

    @Id
    private String id;
    private String name;
    private Integer age;
    private boolean active;
}