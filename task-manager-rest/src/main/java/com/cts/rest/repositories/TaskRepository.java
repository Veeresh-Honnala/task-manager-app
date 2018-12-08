package com.cts.rest.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.rest.model.Task;

public interface TaskRepository extends JpaRepository<Task, Integer>{
}
