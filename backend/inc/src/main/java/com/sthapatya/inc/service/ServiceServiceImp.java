package com.sthapatya.inc.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.sthapatya.inc.model.Service;
import com.sthapatya.inc.repository.ServiceRepository;

@org.springframework.stereotype.Service
public class ServiceServiceImp implements ServiceService {
	
	@Autowired
	public ServiceRepository serviceRepository;

	@Override
	public List<Service> getAllService() {
		List<Service> services = new ArrayList<>();
		services = serviceRepository.findAll();
		return services;
	}

	@Override
	public Service saveService(Service service) {
		
		return serviceRepository.save(service);
	}

	@Override
	public Service updateService(Service service, String id) {
		Service existing = getById(id);
		
		BeanUtils.copyProperties(service, existing ,"id");
		return serviceRepository.save(existing);
	}

	private Service getById(String id) {
		
		return serviceRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Service Not Found"));
	}

	@Override
	public String deleteService(String id) {
		try {
			Service service = getById(id);
			serviceRepository.deleteById(id);
			return service.getTitle() + "Service Deleted Sucessfully";
		} catch (Exception e) {
			// TODO: handle exception
			return "Error on Deleting Service";
		}
		
		
	}

}
