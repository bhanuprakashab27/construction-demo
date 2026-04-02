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

import com.sthapatya.inc.model.Project;
import com.sthapatya.inc.service.ProjectService;

@RestController
@RequestMapping("/api/project")
//@CrossOrigin(origins = "http://localhost:4200")
public class ProjectEndpoint {
	
	@Autowired
	public ProjectService projectService;
	
	@GetMapping("/getAll")
	public List<Project> getallProject(){
		
		return projectService.getAllProjects();
	}
	
	@PostMapping("/save")
	public Project saveProject(@RequestBody Project project) {
		return projectService.saveProject(project);
	}
	
	@PutMapping("update/{id}")
	public Project update(@PathVariable String id, @RequestBody Project project) {
	    return projectService.updateproject(id, project);
	}
	
	@DeleteMapping("delete/{id}")
	public String delete(@PathVariable String id) {
		return projectService.deleteProject(id);
	}

}
