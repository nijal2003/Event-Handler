package com.spring.eventHandlerBackend.service;

import com.spring.eventHandlerBackend.dto.EventDto;

import java.util.List;

public interface EventService {
    EventDto createEvent(EventDto eventDto);

    EventDto getEventById(Long eventId);

    List<EventDto> getAllEvents();

    EventDto updateEvent(Long eventId, EventDto updatedEvent);
}
