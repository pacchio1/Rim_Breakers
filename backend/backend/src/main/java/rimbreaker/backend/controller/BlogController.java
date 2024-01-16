package rimbreaker.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rimbreaker.backend.service.BlogService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/blog")
@CrossOrigin
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

}
