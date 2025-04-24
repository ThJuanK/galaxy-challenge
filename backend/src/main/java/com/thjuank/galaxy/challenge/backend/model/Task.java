package com.thjuank.galaxy.challenge.backend.model;
import java.util.Date;

public class Task {
    Long id;
    String title, description;
    Boolean isDone;
    Date createdAt = new Date();

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Boolean getIsDone() {
        return isDone;
    }
    public void setIsDone(Boolean isDone) {
        this.isDone = isDone;
    }
    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
