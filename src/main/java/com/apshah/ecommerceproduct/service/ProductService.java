package com.apshah.ecommerceproduct.service;

import com.apshah.ecommerceproduct.entity.Product;
import com.apshah.ecommerceproduct.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> ShowAllProduct(){
        return productRepository.findAll();

    }
    public String addProduct(Product product) {
        productRepository.save(product);
        return "Product was added";
    }
}
