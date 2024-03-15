package com.spring.eventHandlerBackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {

    private Long id;
    private String title;
    private String description;
    private Date date;
    private String category; // New field for category

    // Getters and setters
}


//package com.spring.eventHandlerBackend.dto;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.sql.Date;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class EventDto {
//
//    private Long id;
//    private String title;
//    private String description;
//    private Date date;
//}
