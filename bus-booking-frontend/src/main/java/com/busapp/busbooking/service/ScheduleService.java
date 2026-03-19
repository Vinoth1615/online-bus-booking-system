package com.busapp.busbooking.service;

import com.busapp.busbooking.model.Schedule;
import com.busapp.busbooking.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;

    public List<Schedule> searchSchedules(String origin, String destination) {
        return scheduleRepository.findByRouteOriginAndRouteDestination(origin, destination);
    }

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Schedule addSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }
}