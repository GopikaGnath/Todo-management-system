package Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Entity.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
}



