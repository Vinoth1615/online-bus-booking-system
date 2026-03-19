package com.busapp.busbooking.repository;

import com.busapp.busbooking.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    List<Schedule> findByRouteOriginAndRouteDestination(String origin, String destination);
}