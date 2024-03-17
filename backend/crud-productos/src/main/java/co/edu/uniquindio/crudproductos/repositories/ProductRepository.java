package co.edu.uniquindio.crudproductos.repositories;

import co.edu.uniquindio.crudproductos.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
