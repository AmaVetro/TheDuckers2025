package com.example.BackendDuckers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BackendDuckers.model.Product;


//Interfaz que finalmente conecta con mysqlworkbench, gracias al poder de JPARepository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
