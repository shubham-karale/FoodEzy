package com.foodezy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodezy.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
