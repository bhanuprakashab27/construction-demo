package com.sthapatya.inc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sthapatya.inc.model.Project;

@Service
public interface ProjectService {

	List<Project> getAllProjects();

	Project saveProject(Project project);

	Project updateproject(String id, Project project);

	String deleteProject(String id);

}
