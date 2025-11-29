package com.example.BackendDuckers.model;

import jakarta.persistence.*;
import java.util.List;


@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String shortDescription;
    @Column(length = 2000) //Para que permita textos largos para description, ya que si no se especifica se pone varchar(255)
    private String description;
    private Integer price;
    private String image;
    //Este atributo es para los specs, generará una tabla separada en mysql workbench para los specs:   
    @ElementCollection //Crea una tabla aparte (sin id propio) que guardará la lista en distintas filas.
    private List<String> specs; 
    //ya que las columnas de mysql workbench no pueden guardar listas con formato real de lista.
    //Esta tabla autogenerada de los specs solo está conectada a la tabla Product, pero no es una tabla entity propiamente tal.

    public Product() {
    }

    public Product(Long id, String name, String shortDescription, String description, Integer price, String image,
            List<String> specs) {
        this.id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.price = price;
        this.image = image;
        this.specs = specs;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getSpecs() {
        return specs;
    }

    public void setSpecs(List<String> specs) {
        this.specs = specs;
    }

    
    
}