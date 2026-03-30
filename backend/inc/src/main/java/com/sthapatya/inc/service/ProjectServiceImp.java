package com.sthapatya.inc.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sthapatya.inc.model.Project;
import com.sthapatya.inc.repository.ProjectRepository;

@Service
public class ProjectServiceImp implements ProjectService {
	
	@Autowired
	public ProjectRepository projectRepository;
	

	@Override
	public List<Project> getAllProjects() {
		List<Project> projects = new ArrayList<Project>();
		
		projects = projectRepository.findAll();
		return projects;
	}


	@Override
	public Project saveProject(Project project) {
		
		return projectRepository.save(project);
	}


	@Override
	public Project updateproject(String id, Project project) {
		Project existing = getById(id);

        // copy all fields except id
        BeanUtils.copyProperties(project, existing, "id");

        return projectRepository.save(existing);
	}
	
//	get project by id
	public Project getById(String id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));
    }


	@Override
	public String deleteProject(String id) {
		projectRepository.deleteById(id);
		return "project deleted sucessfully";
	}
	
	
	

}
