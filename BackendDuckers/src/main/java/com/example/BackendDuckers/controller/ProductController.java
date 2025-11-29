package com.example.BackendDuckers.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.BackendDuckers.model.Product;
import com.example.BackendDuckers.service.ProductService;

//Al ser este el controlador restful, todo objeto que se maneja aquí se serializa a json y se envía en
//json hacia el front end.
@RestController 
@RequestMapping("/api/products") //URL base para las peticiones provenientes desde front end o postman

@CrossOrigin(origins = "http://localhost:5173")
//CrossOrigin: Ya que el frontend corre en puerto 5173 y el backend corre en 8080, este recurso permite que el backend
//acepte peticiones desde el puerto 5173 (front end). Permite el "Cruce de origenes/puertos".

public class ProductController {
    @Autowired
    private ProductService productService;

    //Método get básico que activa a listarProductos de service. Es un get básico que solo usa la URL base del controlador.
    @GetMapping
    public List<Product> listarProductos() {
        return productService.listarProductos();
    }


    //Método get que incluye parámetro en la URL, activa a buscarPorId de ProductService
    @GetMapping("/{id}")
    public ResponseEntity<Product> obtenerPorId(@PathVariable Long id) { //PathVariable siempre que se use parámetro en la URL, 
        return productService.buscarPorId(id)                            //es para bajar el parámetro de la URL hacia el método.
                .map(ResponseEntity::ok) //ResponseEntity para devolver ok (200) o not found (404) en postman. 
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}