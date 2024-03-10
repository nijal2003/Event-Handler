package com.spring.eventHandlerBackend.mapper;

import com.spring.eventHandlerBackend.dto.EventDto;
import com.spring.eventHandlerBackend.entity.Event;

public class EventMapper {
    public static EventDto mapToEventDto(Event event){
        return new EventDto(
            event.getId(),
            event.getTitle(),
            event.getDescription(),
            event.getDate()
        );
    }

    public static Event mapToEvent(EventDto eventDto){
        return new Event(
                eventDto.getId(),
                eventDto.getTitle(),
                eventDto.getDescription(),
                eventDto.getDate()
        );
    }
}
