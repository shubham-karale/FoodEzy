package com.foodezy.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Many CartItems have One Cart
    @JsonIgnore
    @ManyToOne
    private Cart cart;

    // Many CartItems have One Food
    @ManyToOne
    private Food food;
    
    private int quantity;
     // * One CartItem have Many Ingredients
    private List<String> ingredients;
    
    private Long totalPrice;
    
   
}

