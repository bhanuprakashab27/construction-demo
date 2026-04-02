package com.sthapatya.inc.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sthapatya.inc.model.Contact;
import com.sthapatya.inc.service.ContactService;

@RestController
@RequestMapping("/api/contactLead")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactEndpoint {
	
	@Autowired
	public ContactService contactService;
	
	@GetMapping("/getAll")
	public List<Contact> getAllContactLeads(){
		
		return contactService.getAllContactList();
	}
	
	@PostMapping("/save")
	public Contact saveContactLead(@RequestBody Contact contact) {
		
		return contactService.saveContact(contact);
	}
	
	@DeleteMapping("/delete")
	public String deleteContact(@PathVariable String id) {
		
		return contactService.deleteContact(id);
	}
	
	  @PutMapping("/updateStatus/{id}")
	    public ResponseEntity<Contact> updateContactLeadStatus(
	            @PathVariable String id,
	            @RequestBody Map<String, String> request) {
		  

	        Contact updatedLead = contactService.updateLeadStatus(id, request);

	        return ResponseEntity.ok(updatedLead);
	    }

}
