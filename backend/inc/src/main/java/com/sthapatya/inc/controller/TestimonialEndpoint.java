package com.sthapatya.inc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sthapatya.inc.model.Testimonial;
import com.sthapatya.inc.service.TestimonialService;

@RestController
@RequestMapping("/api/testimonial")
//@CrossOrigin(origins = "http://localhost:4200")
public class TestimonialEndpoint {

	@Autowired
	public TestimonialService testimonialService;
	
	@GetMapping("/getAll")
	public List<Testimonial> getAllTestimonial() {
		
		return testimonialService.getAllTestimonial();
	}
	
	@PostMapping("/save")
	public Testimonial saveTestimonial(@RequestBody Testimonial testimonial) {
		
		return testimonialService.saveTestimonial(testimonial);
	}
	
	@PutMapping("/update/{id}")
	public Testimonial updateTestimonial(@RequestBody Testimonial testimonial, @PathVariable String id) {
		
		return testimonialService.updateTestimonial(testimonial,id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteTestimonial(@PathVariable String id) {
		return testimonialService.deleteTestimonial(id);
	}
}
