package cwa.learn.bootmongo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import cwa.learn.bootmongo.model.Tutorial;

/**
 * TutorialRepository
 */
public interface TutorialRepository extends MongoRepository<Tutorial, String> {

    List<Tutorial> findByTitleContaining(String title);

    List<Tutorial> findByPublished(boolean published);

}