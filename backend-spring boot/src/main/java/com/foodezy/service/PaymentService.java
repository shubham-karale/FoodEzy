package com.foodezy.service;

import com.stripe.exception.StripeException;
import com.foodezy.model.Order;
import com.foodezy.model.PaymentResponse;

public interface PaymentService {
	
	public PaymentResponse generatePaymentLink(Order order) throws StripeException;

}
