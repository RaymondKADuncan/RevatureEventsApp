package com.event.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.event.beans.Event;
import com.event.services.EventService;

@RestController
@CrossOrigin
public class EventController 
{
	@Autowired
	private EventService eventService;
	
	@RequestMapping(value="/event/add", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Event> addEvent(@RequestBody Event e) {
		e = eventService.saveOne(e);
		
		if(e == null) {
			return new ResponseEntity<Event>(e, HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<Event>(e, HttpStatus.CREATED);
		}
	}

	@RequestMapping(value="/event/view/all", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Event>> getAllEvents() {
		return new ResponseEntity<List<Event>>(eventService.getAll(), HttpStatus.OK);
	}
	
	@RequestMapping(value="/event/view/id/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Event> getEventByID(@PathVariable int id) {
		return new ResponseEntity<Event>(eventService.getOne(id), HttpStatus.OK);
	}
	
	//getUpcomingEvents testing
	@RequestMapping(value="/event/view/{dateTime}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Event>> getUpcomingEvents(@PathVariable LocalDateTime dateTime) {
		return new ResponseEntity<List<Event>>(eventService.getUpcoming(dateTime), HttpStatus.OK);
	}
	
	//getVisibleEvents testing
	@RequestMapping(value="/event/view/{isVisible}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Event>> getVisibleEvents(boolean isVisible) {
		return new ResponseEntity<List<Event>>(eventService.getByVisible(true), HttpStatus.OK);
	}
	
	@RequestMapping(value="/event/update", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Event> updateEvent(@RequestBody Event e) {
		e = eventService.saveOne(e);
		return new ResponseEntity<Event>(e, HttpStatus.OK);
	}
	
	@RequestMapping(value="/event/delete", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Event> deleteEvent(@RequestBody Event e) {
		eventService.delete(e);
		Event event = null;
		return new ResponseEntity<Event>(event, HttpStatus.OK);
	}
	
	
	//eventService.getAll().stream().filter(e -> e.getName().equals("INPUTSTRING")).collect(Collectors.toList())
	
}