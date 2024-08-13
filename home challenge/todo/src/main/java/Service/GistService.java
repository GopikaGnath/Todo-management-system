package Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import Entity.Project;
import Entity.Todo;

@Service
public class GistService {

    @Value("${github.token}")
    private String githubToken;

    public String exportProjectSummaryToGist(Project project) {
        String gistContent = generateGistContent(project);
        Map<String, Object> requestPayload = new HashMap<>();
        requestPayload.put("description", "Project Summary: " + project.getTitle());
        requestPayload.put("public", false);

        Map<String, Object> files = new HashMap<>();
        Map<String, String> fileContent = new HashMap<>();
        fileContent.put("content", gistContent);
        files.put(project.getTitle() + ".md", fileContent);
        requestPayload.put("files", files);

        RestTemplate restTemplate = new RestTemplate();
        String url = "https://api.github.com/gists";
        String response = restTemplate.postForObject(url, requestPayload, String.class);
        
        return response;
    }

    private String generateGistContent(Project project) {
        StringBuilder content = new StringBuilder("# " + project.getTitle() + "\n\n");
        List<Todo> todos = project.getTodos();
        long completedCount = todos.stream().filter(todo -> todo.getStatus() == Todo.Status.COMPLETED).count();
        content.append("Summary: ").append(completedCount).append(" / ").append(todos.size()).append(" completed.\n\n");
        content.append("## Pending Todos\n");

        todos.stream()
             .filter(todo -> todo.getStatus() == Todo.Status.PENDING)
             .forEach(todo -> content.append("- [ ] ").append(todo.getDescription()).append("\n"));

        content.append("\n## Completed Todos\n");
        
        todos.stream()
             .filter(todo -> todo.getStatus() == Todo.Status.COMPLETED)
             .forEach(todo -> content.append("- [x] ").append(todo.getDescription()).append("\n"));
        
        return content.toString();
    }


}
