package Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Entity.Todo;
import Repository.TodoRepository;

@Service
public class TodoService {
	@Autowired
    private TodoRepository todoRepository;

    public Todo updateTodoStatus(Long todoId, Todo.Status status) {
        Todo todo = todoRepository.findById(todoId).orElse(null);
        if (todo != null) {
            todo.setStatus(status);
            return todoRepository.save(todo);
        }
        return null;
    }

    public void deleteTodoById(Long todoId) {
        todoRepository.deleteById(todoId);
    }

  
    }



