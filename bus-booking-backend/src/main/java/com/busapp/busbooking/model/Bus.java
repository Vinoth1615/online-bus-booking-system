package com.busapp.busbooking.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "buses")
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String busNumber;
    private String busName;
    private int totalSeats;

    @Enumerated(EnumType.STRING)
    private BusType busType;

    public enum BusType {
        AC, NON_AC, SLEEPER
    }
}