package com.busapp.busbooking.repository;

import com.busapp.busbooking.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {
    List<Seat> findByBusIdAndIsAvailable(Long busId, boolean isAvailable);
}