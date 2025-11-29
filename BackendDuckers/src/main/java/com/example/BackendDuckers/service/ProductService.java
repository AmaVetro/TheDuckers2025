package com.example.BackendDuckers.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BackendDuckers.model.Product;
import com.example.BackendDuckers.repository.ProductRepository;

import java.util.List;
import java.util.Optional;


//Servicio que sirve para traducir las peticiones get y post del controller hacia el repository (interfaz)
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;


    //listar todos los productos (clásico)
    public List<Product> listarProductos() {
        return productRepository.findAll(); //findAll es propio de repository.
    }

    //listar por id, recibe un parámetro id, en controller el id será en la ruta
    public Optional<Product> buscarPorId(Long id) {
        return productRepository.findById(id); //findById es propio de repository.
    }


}