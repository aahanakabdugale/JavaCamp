package com.apshah.ecommerceproduct.controller;

import com.apshah.ecommerceproduct.entity.Product;
import com.apshah.ecommerceproduct.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;

    public List<Product> showAllProduct(){
        return productService.ShowAllProduct();

    }
    @PostMapping("/addproduct")
    public String addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return "Product added successfully";
    }
}
