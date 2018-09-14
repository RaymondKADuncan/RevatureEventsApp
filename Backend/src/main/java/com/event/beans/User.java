package com.event.beans;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="USER_TABLE")
public class User {

	@Id
	@SequenceGenerator(name="user_seq_gen", sequenceName="user_seq", allocationSize=1)
	@GeneratedValue(generator="user_seq_gen", strategy=GenerationType.SEQUENCE)
	private int id;
	
	private String username;
	private String password;
	private String role;
	
	@ElementCollection
	private List<Integer> events;
	
	@ElementCollection(targetClass=String.class, fetch=FetchType.EAGER)
	private List<String> groups;
	
	public User() {}
	
	public User(String username, String password, String role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public User(String username, String password, String role, List<Integer> events, List<String> groups) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
		this.events = events;
		this.groups = groups;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Integer> getEvents() {
		return events;
	}

	public void setEvents(List<Integer> events) {
		this.events = events;
	}

	public List<String> getGroups() {
		return groups;
	}

	public void setGroups(List<String> groups) {
		this.groups = groups;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", role=" + role + ", events="
				+ events + ", groups=" + groups + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}