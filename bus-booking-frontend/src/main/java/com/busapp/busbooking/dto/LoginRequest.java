package com.busapp.busbooking.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}