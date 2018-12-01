package com.cts.rest.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.rest.model.Responce;

@RestController
@RequestMapping("taskmanager")
public class TaskManagerController {
	
	@GetMapping(path="/ping",consumes=MediaType.APPLICATION_JSON_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
	public Responce<String> ping(){
		return new Responce<String>("Success");
	}

}
