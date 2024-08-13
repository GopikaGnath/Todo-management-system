package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Entity.Project;
import Entity.Todo;
import Repository.ProjectRepository;
@Service
public class ProjectService {

	 @Autowired
	    private ProjectRepository projectRepository;

	    public List<Project> getAllProjects() {
	        return projectRepository.findAll();
	    }

	    public Project getProjectById(Long id) {
	        return projectRepository.findById(id).orElse(null);
	    }

	    public Project createProject(Project project) {
	        return projectRepository.save(project);
	    }

	    public Project updateProject(Project project) {
	        return projectRepository.save(project);
	    }

	    public void deleteProject(Long id) {
	        projectRepository.deleteById(id);
	    }
	    
	    public void addTodoToProject(Long projectId, Todo todo) {
	        Project project = getProjectById(projectId);
	        if (project != null) {
	            project.getTodos().add(todo);
	            todo.setProject(project);
	            projectRepository.save(project);
	        }
	    }

}
