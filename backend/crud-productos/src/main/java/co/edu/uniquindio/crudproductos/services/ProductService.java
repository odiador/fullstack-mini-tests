package co.edu.uniquindio.crudproductos.services;

import co.edu.uniquindio.crudproductos.model.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAll();
    Product findById(Long id);
    Product create(Product product);
    Product update(Long id, Product product);
    void deleteById(Long id);
}
