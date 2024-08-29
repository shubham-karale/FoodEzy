package com.foodezy.service;

import java.util.List;

import com.foodezy.Exception.ReviewException;
import com.foodezy.model.Review;
import com.foodezy.model.User;
import com.foodezy.request.ReviewRequest;

public interface ReviewSerive {
	
    public Review submitReview(ReviewRequest review,User user);
    public void deleteReview(Long reviewId) throws ReviewException;
    public double calculateAverageRating(List<Review> reviews);
}
