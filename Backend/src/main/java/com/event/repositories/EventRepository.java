package com.event.repositories;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.beans.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
	public List<Event> findByTags(String tags);
	public List<Event> getByTime(LocalDateTime dateTime);
	public List<Event> getByVisible(boolean isVisible);
	public List<Event> getByTimeGreaterThan(LocalDateTime dateTime);
}