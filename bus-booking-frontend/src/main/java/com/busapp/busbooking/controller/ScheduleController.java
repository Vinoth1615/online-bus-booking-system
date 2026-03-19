package com.busapp.busbooking.controller;

import com.busapp.busbooking.model.Schedule;
import com.busapp.busbooking.service.ScheduleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/schedules")
@RequiredArgsConstructor
public class ScheduleController {

    private final ScheduleService scheduleService;

    @GetMapping
    public ResponseEntity<List<Schedule>> getAllSchedules() {
        return ResponseEntity.ok(scheduleService.getAllSchedules());
    }

    @GetMapping("/search")
    public ResponseEntity<List<Schedule>> searchSchedules(
            @RequestParam String origin,
            @RequestParam String destination) {
        return ResponseEntity.ok(scheduleService.searchSchedules(origin, destination));
    }

    @PostMapping("/admin/add")
    public ResponseEntity<Schedule> addSchedule(@RequestBody Schedule schedule) {
        return ResponseEntity.ok(scheduleService.addSchedule(schedule));
    }
}