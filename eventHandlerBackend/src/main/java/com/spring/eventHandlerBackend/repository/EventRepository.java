package com.spring.eventHandlerBackend.repository;

import com.spring.eventHandlerBackend.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event,Long> {
}
