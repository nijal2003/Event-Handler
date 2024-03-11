package com.spring.eventHandlerBackend.service.impl;

import com.spring.eventHandlerBackend.dto.EventDto;
import com.spring.eventHandlerBackend.entity.Event;
import com.spring.eventHandlerBackend.exception.ResourceNotFoundException;
import com.spring.eventHandlerBackend.mapper.EventMapper;
import com.spring.eventHandlerBackend.repository.EventRepository;
import com.spring.eventHandlerBackend.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EventServiceImpl implements EventService {

    private EventRepository eventRepository;

    @Override
    public EventDto createEvent(EventDto eventDto){

        Event event = EventMapper.mapToEvent(eventDto);
        Event savedEvent = eventRepository.save(event);

        return EventMapper.mapToEventDto(savedEvent);
    }

    @Override
    public EventDto getEventById(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Event is not exists with given id: "+eventId));
        return EventMapper.mapToEventDto(event);
    }

    @Override
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();

        return events.stream()
                .map(EventMapper::mapToEventDto) // Use method reference to map each Event entity to EventDto
                .collect(Collectors.toList());
    }

    @Override
    public EventDto updateEvent(Long eventId, EventDto updatedEvent) {
        Event event = eventRepository.findById(eventId).orElseThrow(
                ()-> new ResourceNotFoundException("Event is not exists with given id "+eventId)
        );

        event.setTitle(updatedEvent.getTitle());
        event.setDescription(updatedEvent.getDescription());
        event.setDate(updatedEvent.getDate());

        Event updateEventObj = eventRepository.save(event);
        return EventMapper.mapToEventDto(updateEventObj);
    }

    @Override
    public void deleteEvent(Long eventId) {

            Event event = eventRepository.findById(eventId).orElseThrow(
                    ()-> new ResourceNotFoundException("Event is not exists with given id "+eventId)
            );

            eventRepository.deleteById(eventId);
    }


//    @Override
//    public List<EventDto> getAllEvents() {
//        List<Event> events = eventRepository.findAll();
//
//        return events.stream().map((event) -> EventMapper.mapToEventDto(events))
//                .collect(Collectors.toList());
//    }
}
