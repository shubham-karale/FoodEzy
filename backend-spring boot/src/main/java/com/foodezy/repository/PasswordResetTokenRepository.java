package com.foodezy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodezy.model.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer> {
	PasswordResetToken findByToken(String token);
}
