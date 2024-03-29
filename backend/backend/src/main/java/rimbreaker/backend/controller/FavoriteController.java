package rimbreaker.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import rimbreaker.backend.service.FavoriteService;
import rimbreaker.backend.entity.PlayerFollowed;
import rimbreaker.backend.entity.TeamFollowed;
import rimbreaker.backend.entity.LeagueFollowed;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/favorite")
public class FavoriteController {

    private final FavoriteService favoriteService;

    // Aggiungi un giocatore ai preferiti
    @PostMapping("/player")
    public ResponseEntity<?> saveFavoritePlayer(@RequestParam Long userId, @RequestParam Long playerId) {
        favoriteService.saveFavoritePlayer(userId, playerId);
        return ResponseEntity.ok(Map.of(
                "message", "Aggiunto ai fovoriti!"
        ));
    }

    // Ottieni tutti i giocatori preferiti di un utente
    @GetMapping("/player")
    public ResponseEntity<List<PlayerFollowed>> getAllFavoritePlayersByUserId(@RequestParam Long userId) {
        List<PlayerFollowed> favoritePlayers = favoriteService.getAllFavoritePlayersByUserId(userId);
        return ResponseEntity.ok(favoritePlayers);
    }

    // Aggiungi una squadra ai preferiti
    @PostMapping("/team")
    public ResponseEntity<?> saveFavoriteTeam(@RequestParam Long userId, @RequestParam Long teamId) {
        favoriteService.saveFavoriteTeam(userId, teamId);
        return ResponseEntity.ok(Map.of(
                "message", "Aggiunto ai fovoriti!"
        ));
    }

    // Ottieni tutte le squadre preferite di un utente
    @GetMapping("/team")
    public ResponseEntity<List<TeamFollowed>> getAllFavoriteTeamsByUserId(@RequestParam Long userId) {
        List<TeamFollowed> favoriteTeams = favoriteService.getAllFavoriteTeamsByUserId(userId);
        return ResponseEntity.ok(favoriteTeams);
    }

    // Aggiungi una lega ai preferiti
    @PostMapping("/league")
    public ResponseEntity<?> saveFavoriteLeague(@RequestParam Long userId, @RequestParam Long leagueId) {
        favoriteService.saveFavoriteLeague(userId, leagueId);
        return ResponseEntity.ok(Map.of(
                "message", "Aggiunto ai fovoriti!"
        ));
    }

    // Ottieni tutte le leghe preferite di un utente
    @GetMapping("/league")
    public ResponseEntity<List<LeagueFollowed>> getAllFavoriteLeaguesByUserId(@RequestParam Long userId) {
        List<LeagueFollowed> favoriteLeagues = favoriteService.getAllFavoriteLeaguesByUserId(userId);
        return ResponseEntity.ok(favoriteLeagues);
    }
    @PostMapping("/removeFavLeague")
    public ResponseEntity<?> removeFavoriteLeague(@RequestParam Long userId, @RequestParam Long leagueId) {
        favoriteService.removeFavoriteLeague(userId,leagueId);
        return ResponseEntity.ok(Map.of(
                "message", "rimosso dai fovoriti!"
        ));
    }
    @PostMapping("/removeFavPlayer")
    public ResponseEntity<?> removeFavoritePlayer(@RequestParam Long userId, @RequestParam Long playerId) {
        favoriteService.removeFavoritePlayer(userId,playerId);
        return ResponseEntity.ok(Map.of(
                "message", "rimosso dai fovoriti!"
        ));
    }
    @PostMapping("/removeFavTeam")
    public ResponseEntity<?> removeFavoriteTeam(@RequestParam Long userId, @RequestParam Long teamId) {
        favoriteService.removeFavoriteTeam(userId,teamId);
        return ResponseEntity.ok(Map.of(
                "message", "rimosso dai fovoriti!"
        ));
    }

    
}
