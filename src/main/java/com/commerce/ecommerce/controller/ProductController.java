package com.commerce.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.commerce.ecommerce.model.Product;
import com.commerce.ecommerce.repository.ProducRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    ProducRepository producRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return producRepository.findAll();
    }

    @PostMapping("/product/create")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product productSaved = producRepository.save(product);
        return ResponseEntity.ok(productSaved);
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Optional<Product> productOption = producRepository.findById(id);
        if (productOption.isPresent()) {
            Product productSaved = producRepository.save(product);
            return ResponseEntity.ok(productSaved);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        Optional<Product> productOptional = producRepository.findById(id);

        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable Long id) {
        Optional<Product> producOptional = producRepository.findById(id);
        if (producOptional.isPresent()) {
            producRepository.deleteById(id);
            return ResponseEntity.ok().build();

        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
