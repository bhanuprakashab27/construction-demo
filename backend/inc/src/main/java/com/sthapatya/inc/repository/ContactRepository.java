package com.sthapatya.inc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sthapatya.inc.model.Contact;

public interface ContactRepository extends MongoRepository<Contact, String> {

}
