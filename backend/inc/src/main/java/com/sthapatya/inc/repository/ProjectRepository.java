package com.sthapatya.inc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.sthapatya.inc.model.Project;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {

}
