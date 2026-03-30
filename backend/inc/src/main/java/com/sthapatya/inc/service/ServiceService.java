package com.sthapatya.inc.service;


import java.util.List;

import com.sthapatya.inc.model.Service;

@org.springframework.stereotype.Service
public interface ServiceService {

	List<Service> getAllService();

	Service saveService(Service service);

	Service updateService(Service service, String id);

	String deleteService(String id);

}
