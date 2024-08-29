package com.foodezy.service;

import java.util.List;

import com.foodezy.model.Notification;
import com.foodezy.model.Order;
import com.foodezy.model.Restaurant;
import com.foodezy.model.User;

public interface NotificationService {
	
	public Notification sendOrderStatusNotification(Order order);
	public void sendRestaurantNotification(Restaurant restaurant, String message);
	public void sendPromotionalNotification(User user, String message);
	
	public List<Notification> findUsersNotification(Long userId);

}
