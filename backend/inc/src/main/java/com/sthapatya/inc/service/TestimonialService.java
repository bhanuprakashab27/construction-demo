package com.sthapatya.inc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sthapatya.inc.model.Testimonial;

@Service
public interface TestimonialService {

	List<Testimonial> getAllTestimonial();

	Testimonial saveTestimonial(Testimonial testimonial);

	Testimonial updateTestimonial(Testimonial testimonial, String id);

	String deleteTestimonial(String id);

}
