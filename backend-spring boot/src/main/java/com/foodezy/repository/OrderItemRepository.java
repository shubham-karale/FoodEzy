package com.foodezy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodezy.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
