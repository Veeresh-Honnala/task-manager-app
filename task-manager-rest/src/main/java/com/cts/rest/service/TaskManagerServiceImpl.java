package com.cts.rest.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;

import com.cts.rest.model.Task;
import com.cts.rest.repositories.TaskRepository;

public class TaskManagerServiceImpl implements TaskManagerService{
	public static final Logger LOGGER = LoggerFactory.getLogger(TaskManagerService.class);
	
	private TaskRepository taskRepository;
	
	@Override
	public Task saveTask(Task task) throws DataAccessException {
		return taskRepository.save(task);
	}

	@Override
	public List<Task> getTasks() throws DataAccessException {
		return taskRepository.findAll();
	}

	@Override
	public Task getTask(Integer taskId) throws DataAccessException {
		Optional<Task> task = taskRepository.findById(taskId);
		return task.isPresent()?task.get():null;
	}


}
