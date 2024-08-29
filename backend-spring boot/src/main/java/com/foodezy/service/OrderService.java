package com.foodezy.service;

import java.util.List;

import com.stripe.exception.StripeException;
import com.foodezy.Exception.CartException;
import com.foodezy.Exception.OrderException;
import com.foodezy.Exception.RestaurantException;
import com.foodezy.Exception.UserException;
import com.foodezy.model.Order;
import com.foodezy.model.PaymentResponse;
import com.foodezy.model.User;
import com.foodezy.request.CreateOrderRequest;

public interface OrderService {
	
	 public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, RestaurantException, CartException, StripeException;
	 
	 public Order updateOrder(Long orderId, String orderStatus) throws OrderException;
	 
	 public void cancelOrder(Long orderId) throws OrderException;
	 
	 public List<Order> getUserOrders(Long userId) throws OrderException;
	 
	 public List<Order> getOrdersOfRestaurant(Long restaurantId,String orderStatus) throws OrderException, RestaurantException;
	 

}
