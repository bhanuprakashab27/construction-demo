package com.sthapatya.inc.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sthapatya.inc.model.Contact;
import com.sthapatya.inc.repository.ContactRepository;

@Service
public class ContactServiceImp implements ContactService {
	
	@Autowired
	public ContactRepository contactRepository;

	@Override
	public List<Contact> getAllContactList() {
		List<Contact>  contactLeads = contactRepository.findAll();
		return contactLeads;
	}

	@Override
	public Contact saveContact(Contact contact) {
		contact.setDate(LocalDateTime.now()); 
	    contact.setStatus("new");
		return contactRepository.save(contact);
	}

	@Override
	public String deleteContact(String id) {
		contactRepository.deleteById(id);
		return "Contact Deleted Sucessfully";
	}

	@Override
	public Contact updateLeadStatus(String id, Map<String, String> request) {
		 String status = request.get("status");
		 Contact contact = contactRepository.findById(id).
				 orElseThrow(()-> new RuntimeException("contact not found"));
		 contact.setStatus(status);
		return contactRepository.save(contact);
	}

}
