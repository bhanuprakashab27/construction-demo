package com.sthapatya.inc.repository;



import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sthapatya.inc.model.Service;

@Repository
public interface ServiceRepository extends MongoRepository<Service, String>{

}
