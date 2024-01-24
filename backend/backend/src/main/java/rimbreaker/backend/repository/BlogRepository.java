package rimbreaker.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import rimbreaker.backend.entity.Blog;
import rimbreaker.backend.payload.response.ResponseBlog;
import rimbreaker.backend.payload.response.ResponseBlogCountry;
import rimbreaker.backend.payload.response.ResponseBlogLeague;
import rimbreaker.backend.payload.response.ResponseBlogTeam;

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

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseBlogCountry(" +
            "b.id_blog, " +
            "b.id_user, " +
            "c.id_country, " +
            "c.name AS nameCountry, " +
            "b.text" +
            ") FROM Blog b " +
            "JOIN Country c ON c.id_country = b.id_country " +
            "WHERE b.id_country = :id_country")
    List<ResponseBlogCountry> getPostByCountry(@Param("id_country") Long id);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseBlogLeague(" +
            "b.id_blog, " +
            "b.id_user, " +
            "l.id_league, " +
            "l.name AS nameLeague, " +
            "b.text" +
            ") FROM Blog b " +
            "JOIN League l ON l.id_league = b.id_league " +
            "WHERE b.id_league = :id_league")
    List<ResponseBlogLeague> getPostByLeague(@Param("id_league") Long id);

    @Query("SELECT new rimbreaker.backend.payload.response.ResponseBlogTeam(" +
            "b.id_blog, " +
            "b.id_user, " +
            "t.id, " +
            "t.name AS nameTeam, " +
            "b.text" +
            ") FROM Blog b " +
            "JOIN Team t ON t.id = b.id_team " +
            "WHERE b.id_team = :id_team")
    List<ResponseBlogTeam> getPostByTeam(@Param("id_team") Long id);

}
