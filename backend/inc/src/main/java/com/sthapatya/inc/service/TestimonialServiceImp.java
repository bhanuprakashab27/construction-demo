package com.sthapatya.inc.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sthapatya.inc.model.Testimonial;
import com.sthapatya.inc.repository.TestimonialRepository;

@Service
public class TestimonialServiceImp implements TestimonialService {
	
	@Autowired
	public TestimonialRepository testimonialRepository;

	@Override
	public List<Testimonial> getAllTestimonial() {
		 List<Testimonial> testimonial = new ArrayList<>();
		 testimonial = testimonialRepository.findAll();
		return testimonial;
	}

	@Override
	public Testimonial saveTestimonial(Testimonial testimonial) {
		
		return testimonialRepository.save(testimonial);
	}

	@Override
	public Testimonial updateTestimonial(Testimonial testimonial, String id) {
		Testimonial existing = getById(id);
		
		BeanUtils.copyProperties(testimonial, existing , "id");
		 
		return testimonialRepository.save(existing);
	}

	private Testimonial getById(String id) {
		
		return testimonialRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Testimonial is not found"));
	}

	@Override
	public String deleteTestimonial(String id) {
		testimonialRepository.deleteById(id);
		return "Testimonial is deleted Sucessfully";
	}

}
