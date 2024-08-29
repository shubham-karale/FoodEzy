package com.foodezy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodezy.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


//    CartItem findByFoodIsContaining

}
