package com.busapp.busbooking.repository;

import com.busapp.busbooking.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepository extends JpaRepository<Bus, Long> {}