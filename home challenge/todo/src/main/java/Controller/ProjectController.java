package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Entity.Project;
import Entity.Todo;
import Service.ProjectService;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {


	    @Autowired
	    private ProjectService projectService;

	    @GetMapping
	    public List<Project> getAllProjects() {
	        return projectService.getAllProjects();
	    }

	    @GetMapping("/{id}")
	    public Project getProjectById(@PathVariable Long id) {
	        return projectService.getProjectById(id);
	    }

	    @PostMapping
	    public Project createProject(@RequestBody Project project) {
	        return projectService.createProject(project);
	    }

	    @PutMapping("/{id}")
	    public Project updateProject(@PathVariable Long id, @RequestBody Project project) {
	        project.setId(id);
	        return projectService.updateProject(project);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteProject(@PathVariable Long id) {
	        projectService.deleteProject(id);
	    }

	    @PostMapping("/{projectId}/todos")
	    public void addTodoToProject(@PathVariable Long projectId, @RequestBody Todo todo) {
	        projectService.addTodoToProject(projectId, todo);
	    }


}
