package Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Entity.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{


}
