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

import com.sthapatya.inc.model.Service;
import com.sthapatya.inc.service.ServiceService;

@RestController
@RequestMapping("/api/service")
//@CrossOrigin(origins = "http://localhost:4200")
public class ServiceEndpoint {

	@Autowired
	public ServiceService serviceService;
	
	@GetMapping("/getAll")
	public List<Service> getAllService() {
		
		return serviceService.getAllService();
	}
	
	@PostMapping("/save")
	public Service saveService(@RequestBody Service service) {
		
		return serviceService.saveService(service);
	}
	
	@PutMapping("/update/{id}")
	public Service updateService(@RequestBody Service service, @PathVariable String id) {
		
		return serviceService.updateService(service,id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteService(@PathVariable String id) {
		return serviceService.deleteService(id);
	}
}
