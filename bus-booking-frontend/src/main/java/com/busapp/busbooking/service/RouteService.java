package com.busapp.busbooking.service;

import com.busapp.busbooking.model.Route;
import com.busapp.busbooking.repository.RouteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RouteService {

    private final RouteRepository routeRepository;

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public List<Route> searchRoutes(String origin, String destination) {
        return routeRepository.findByOriginAndDestination(origin, destination);
    }

    public Route addRoute(Route route) {
        return routeRepository.save(route);
    }
}