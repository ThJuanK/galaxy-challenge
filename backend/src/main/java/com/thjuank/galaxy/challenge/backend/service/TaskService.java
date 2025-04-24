package com.thjuank.galaxy.challenge.backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import com.thjuank.galaxy.challenge.backend.model.Task;

@Service
public class TaskService {
    private final Map<Long, Task> tasks = new HashMap<>();
    private final AtomicLong idCounter = new AtomicLong(1);

    public List<Task> getAll(){
        return new ArrayList<>(tasks.values());
    }

    public Task create(Task task) {
        Long id = idCounter.getAndIncrement();
        task.setId(id);
        tasks.put(id, task);
        return task;
    }

    public Optional<Task> update(Long id, Task newTask) {
        Task findedTask = this.tasks.get(id);
        if( findedTask == null) return Optional.empty();
        
        if(newTask.getTitle() != null) {
            findedTask.setTitle(newTask.getTitle());
        } 
        if(newTask.getDescription() != null) {
            findedTask.setDescription(newTask.getDescription());
        } 
        if(newTask.getIsDone() != null) {
            findedTask.setIsDone(newTask.getIsDone());
        } 
        
        return Optional.of(findedTask);
    }

    public Boolean delete(Long id){
        Task findedTask = this.tasks.get(id);
        if( findedTask == null) return false;
        
        this.tasks.remove(id);
        return true;
    }
}
