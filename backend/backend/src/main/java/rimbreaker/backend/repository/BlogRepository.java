package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Blog;
import rimbreaker.backend.payload.response.ResponseBlog;

import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Integer> {

    @Query("FROM Blog WHERE id_blog = :id_blog")
    List<Blog> getPostById(@Param("id_blog") Long id_blog);

    @Query("FROM Blog")
    List<Blog> getAllPosts();

    //se serve, aggiungere anche ricerca per id o aggiornare le funzioni vecchie
    @Query("SELECT new rimbreaker.backend.payload.response.ResponseBlog(" +
            "b.id_blog, " +
            "u.name, " +
            "u.surname, " +
            "b.text" +
            ") FROM Blog b " +
            "JOIN User u ON u.idUser = b.id_user")
    List<ResponseBlog> getAllPostsWithUsers();

}
