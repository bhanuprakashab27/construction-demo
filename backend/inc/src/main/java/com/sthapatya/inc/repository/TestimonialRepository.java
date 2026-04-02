package com.sthapatya.inc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sthapatya.inc.model.Testimonial;

public interface TestimonialRepository extends MongoRepository<Testimonial, String> {

}
