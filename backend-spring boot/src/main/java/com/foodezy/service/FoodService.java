package com.foodezy.service;

import java.util.List;

import com.foodezy.Exception.FoodException;
import com.foodezy.Exception.RestaurantException;
import com.foodezy.model.Category;
import com.foodezy.model.Food;
import com.foodezy.model.Restaurant;
import com.foodezy.request.CreateFoodRequest;

public interface FoodService {

	public Food createFood(CreateFoodRequest req,Category category,
						   Restaurant restaurant) throws FoodException, RestaurantException;

	void deleteFood(Long foodId) throws FoodException;
	
	public List<Food> getRestaurantsFood(Long restaurantId,
			boolean isVegetarian, boolean isNonveg, boolean isSeasonal,String foodCategory) throws FoodException;
	
	public List<Food> searchFood(String keyword);
	
	public Food findFoodById(Long foodId) throws FoodException;

	public Food updateAvailibilityStatus(Long foodId) throws FoodException;
}
