package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.BlogService;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/blog")
public class BlogController {

    private final BlogService blogService;

    @GetMapping("/post")
    public ResponseEntity<?> getPostById(Long id_post) {

        return blogService.getPostsById(id_post);

    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPosts() {

        return blogService.getAllPosts();

    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllPostsWithUsers() {

        return blogService.getAllPostsWithUsers();

    }

    @GetMapping("/post_country")
    public ResponseEntity<?> getPostByCountry(Long id) {

        return blogService.getPostByCountry(id);

    }

    @GetMapping("/post_league")
    public ResponseEntity<?> getPostByLeague(Long id) {

        return blogService.getPostByLeague(id);

    }

    @GetMapping("/post_team")
    public ResponseEntity<?> getPostByTeam(Long id) {

        return blogService.getPostByTeam(id);

    }

}
