package com.commerce.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.commerce.ecommerce.model.Product;

@Repository
public interface ProducRepository extends JpaRepository<Product,Long> {
    
}
