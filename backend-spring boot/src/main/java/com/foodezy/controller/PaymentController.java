package com.foodezy.controller;

import com.foodezy.model.PaymentResponse;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodezy.service.PaymentService;

//@RestController
//@RequestMapping("/api")
//public class PaymentController {
//
//	@Autowired
//	private PaymentService paymentService;
//
//	@PostMapping("/{orderId}/payment")
//	public ResponseEntity<PaymentResponse> generatePaymentLink(@PathVariable Long orderId)
//			throws StripeException, StripeException {
//
//		PaymentResponse res = paymentService.generatePaymentLink(orderId);
//
//		return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
//	}
//
//}
