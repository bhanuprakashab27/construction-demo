package com.sthapatya.inc.service;

import java.util.List;
import java.util.Map;

import com.sthapatya.inc.model.Contact;

public interface ContactService {

	List<Contact> getAllContactList();

	Contact saveContact(Contact contact);

	String deleteContact(String id);

	Contact updateLeadStatus(String id, Map<String, String> request);

}
