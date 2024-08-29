package com.foodezy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodezy.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
