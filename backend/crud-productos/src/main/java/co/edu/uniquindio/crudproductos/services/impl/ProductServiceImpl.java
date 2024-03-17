package co.edu.uniquindio.crudproductos.services.impl;

import co.edu.uniquindio.crudproductos.model.Product;
import co.edu.uniquindio.crudproductos.repositories.ProductRepository;
import co.edu.uniquindio.crudproductos.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;


    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(Long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product create(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product update(Long id, Product product) {
        Product oldProduct = findById(id);
        oldProduct.setCedula(product.getCedula());
        oldProduct.setName(product.getName());
        return productRepository.save(oldProduct);

    }

    @Override
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
}
