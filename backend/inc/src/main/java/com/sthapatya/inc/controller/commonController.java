package com.sthapatya.inc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class commonController {
	
	@GetMapping
	public String sthapathyaInc() {
		return "Working";
	}

}
