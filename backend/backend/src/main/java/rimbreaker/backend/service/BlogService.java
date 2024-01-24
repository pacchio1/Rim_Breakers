package rimbreaker.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rimbreaker.backend.repository.BlogRepository;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;

    public ResponseEntity<?> getPostsById(Long id_post) {

        try {

            return new ResponseEntity<>(blogRepository.getPostById(id_post), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("Post not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getAllPosts() {

        try {

            return new ResponseEntity<>(blogRepository.getAllPosts(), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("Something went wrong! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getAllPostsWithUsers() {

        try {

            return new ResponseEntity<>(blogRepository.getAllPostsWithUsers(), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("Something went wrong! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getPostByCountry(Long id) {

        try {

            return new ResponseEntity<>(blogRepository.getPostByCountry(id), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("No post found with this country! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getPostByLeague(Long id) {

        try {

            return new ResponseEntity<>(blogRepository.getPostByLeague(id), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("No post found with or about this league! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

    public ResponseEntity<?> getPostByTeam(Long id) {

        try {

            return new ResponseEntity<>(blogRepository.getPostByTeam(id), HttpStatus.OK);

        }
        catch(Exception e) {

            return new ResponseEntity<>("No post found with or about this team! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }

}
