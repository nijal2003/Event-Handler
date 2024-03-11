package com.spring.eventHandlerBackend.controller;

import com.spring.eventHandlerBackend.dto.EventDto;
import com.spring.eventHandlerBackend.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/events")
public class EventController {
    private EventService eventService;

    //Build Add Event REST API
    @PostMapping
    public ResponseEntity<EventDto> createEvent(@RequestBody EventDto eventDto) {
        EventDto savedEvent = eventService.createEvent(eventDto);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    // Build get Event REST api
    @GetMapping("{id}")
    public ResponseEntity<EventDto> getEventById(@PathVariable("id") Long eventId){
        EventDto eventDto = eventService.getEventById((eventId));
        return ResponseEntity.ok(eventDto);
    }

    // Build Get All Event REST api
    @GetMapping
    public ResponseEntity<List<EventDto>> getAllEvents(){
        List<EventDto> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    //Build update event REST api
    @PutMapping("{id}")
    public ResponseEntity<EventDto> updateEvent(@PathVariable("id") Long eventId,
                                                @RequestBody EventDto updatedEvent){
        EventDto eventDto = eventService.updateEvent(eventId,updatedEvent);
        return ResponseEntity.ok(eventDto);
    }

    //Build delete event REST api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable("id") Long eventId){
        eventService.deleteEvent(eventId);
        return ResponseEntity.ok("Event Deleted Successfully");
    }


}
