package Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import Entity.Project;
import Service.GistService;
import Service.ProjectService;

public class GistController {
	 @Autowired
	    private GistService gistService;

	    @Autowired
	    private ProjectService projectService;

	    @PostMapping("/export/{projectId}")
	    public String exportProjectSummaryToGist(@PathVariable Long projectId) {
	        Project project = projectService.getProjectById(projectId);
	        if (project != null) {
	            return gistService.exportProjectSummaryToGist(project);
	        }
	        return "Project not found";
	    }


}
