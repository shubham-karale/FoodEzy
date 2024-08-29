package com.foodezy.service;

import com.foodezy.Exception.CartException;
import com.foodezy.Exception.CartItemException;
import com.foodezy.Exception.FoodException;
import com.foodezy.Exception.UserException;
import com.foodezy.model.Cart;
import com.foodezy.model.CartItem;
import com.foodezy.request.AddCartItemRequest;

public interface CartSerive {

	public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws UserException, FoodException, CartException, CartItemException;

	public CartItem updateCartItemQuantity(Long cartItemId,int quantity) throws CartItemException;

	public Cart removeItemFromCart(Long cartItemId, String jwt) throws UserException, CartException, CartItemException;

	public Long calculateCartTotals(Cart cart) throws UserException;
	
	public Cart findCartById(Long id) throws CartException;
	
	public Cart findCartByUserId(Long userId) throws CartException, UserException;
	
	public Cart clearCart(Long userId) throws CartException, UserException;
	

	

}
