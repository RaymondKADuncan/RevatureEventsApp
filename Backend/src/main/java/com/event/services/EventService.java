package com.event.services;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.beans.Event;
import com.event.repositories.EventRepository;

@Service
@Transactional
public class EventService {

	@Autowired
	private EventRepository eventRepo;
	
	public List<Event> getAll(){
		System.out.println(eventRepo.findAll());
		return eventRepo.findAll();
	}
	
	public List<Event> getUpcoming(LocalDateTime dateTime) {
		LocalDateTime currTime = LocalDateTime.now();
		if(dateTime.isBefore(currTime)) return eventRepo.getByTime(dateTime);
		else return null;
	}
	
	public List<Event> getByVisible(boolean isVisable) {
		return eventRepo.getByVisible(true);
	}
	
	public Event getOne(int id) {
		return eventRepo.findOne(id);
	}
	
	public Event saveOne(Event e) {
		return eventRepo.save(e);
	}
	
	public void delete(Event e) {
		eventRepo.delete(e);
	}
	
	public List<Event> getEventsFromCurrentTime(){
		return eventRepo.getByTimeGreaterThan(LocalDateTime.now());
	}
	
	public List<Event> getEventsByName(String name){
		return eventRepo.getByName(name);
	}
	
}