package com.cts.rest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity()
@Table(name = "TASK")
public class Task {
	@Column(name = "task_id")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer taskId;

	@Column(name = "task_name")
	private String taskName;

	private String priority;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parent_id", nullable = true)
	private ParentTask parentTask;
	@Column(name = "start_Date")
	private String startDate;
	@Column(name = "end_date")
	private String endDate;
	@Column(name = "edit_enabled")
	private String editEnabled;

	public Integer getTaskId() {
		return taskId;
	}

	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public ParentTask getParentTask() {
		return parentTask;
	}

	public void setParentTask(ParentTask parentTask) {
		this.parentTask = parentTask;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getEditEnabled() {
		return editEnabled;
	}

	public void setEditEnabled(String editEnabled) {
		this.editEnabled = editEnabled;
	}

}
