package com.busapp.busbooking.service;

import com.busapp.busbooking.model.*;
import com.busapp.busbooking.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final ScheduleRepository scheduleRepository;
    private final SeatRepository seatRepository;
    private final UserRepository userRepository;

    public Booking createBooking(Long userId, Long scheduleId, Long seatId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Schedule schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new RuntimeException("Schedule not found"));

        Seat seat = seatRepository.findById(seatId)
                .orElseThrow(() -> new RuntimeException("Seat not found"));

        if (!seat.isAvailable()) {
            throw new RuntimeException("Seat already booked");
        }

        // Mark seat as unavailable
        seat.setAvailable(false);
        seatRepository.save(seat);

        // Reduce available seats in schedule
        schedule.setAvailableSeats(schedule.getAvailableSeats() - 1);
        scheduleRepository.save(schedule);

        // Create booking
        Booking booking = new Booking();
        booking.setUser(user);
        booking.setSchedule(schedule);
        booking.setSeat(seat);
        booking.setBookingDate(LocalDateTime.now());
        booking.setTotalPrice(schedule.getPrice());
        booking.setStatus(Booking.BookingStatus.CONFIRMED);

        return bookingRepository.save(booking);
    }

    public List<Booking> getUserBookings(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    public Booking cancelBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        // Free the seat
        Seat seat = booking.getSeat();
        seat.setAvailable(true);
        seatRepository.save(seat);

        // Increase available seats
        Schedule schedule = booking.getSchedule();
        schedule.setAvailableSeats(schedule.getAvailableSeats() + 1);
        scheduleRepository.save(schedule);

        booking.setStatus(Booking.BookingStatus.CANCELLED);
        return bookingRepository.save(booking);
    }
}