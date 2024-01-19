package rimbreaker.backend.service;
import com.sun.net.httpserver.Authenticator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import rimbreaker.backend.payload.response.ResponseGame;
import rimbreaker.backend.repository.GamesRepository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class InputService {
    public ResponseEntity<?> SeVedemo() {
        String SeVedemo= " Sempre verra ricordato SeVedemo <3 - by pigiatasti - sempre nei nostri cuori ";
        try {

            return new ResponseEntity<>(SeVedemo, HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }
    public ResponseEntity<?> RunApiGamesOggi(String password) {
        StringBuilder Result = new StringBuilder();
        try {
            if(Objects.equals(password, "superapi")){
                // Replace "pythonScript.py" with the path to your Python script
                ProcessBuilder processBuilder = new ProcessBuilder("python", "games_standings_di_oggi.py");
                processBuilder.redirectErrorStream(true);
                Process process = processBuilder.start();
                // Read the output of the Python script
                BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
                String line;
                while ((line = reader.readLine()) != null) {
                    Result.append(line + "\n");
                }
                int exitCode = process.waitFor();
                Result.append("script execution completed with exit code: ").append(exitCode);

            }
            else {
                return new ResponseEntity<>("password errata!", HttpStatus.OK);
            }

            return new ResponseEntity<>(Result, HttpStatus.OK);

        }
        catch (Exception e) {

            return new ResponseEntity<>("not found! : " + e.getMessage(), HttpStatus.BAD_REQUEST);

        }

    }
}
