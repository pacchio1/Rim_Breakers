package rimbreaker.backend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rimbreaker.backend.entity.PlayerFollowed;
import rimbreaker.backend.entity.TeamFollowed;
import rimbreaker.backend.entity.LeagueFollowed;
import rimbreaker.backend.repository.FavoriteLeagueRepository;
import rimbreaker.backend.repository.FavoritePlayerRepository;
import rimbreaker.backend.repository.FavoriteTeamRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavoriteService {

    private final FavoritePlayerRepository favoritePlayerRepository;

    private final FavoriteTeamRepository favoriteTeamRepository;

    private final FavoriteLeagueRepository favoriteLeagueRepository;

    public void saveFavoritePlayer(Long userId, Long playerId) {

        favoritePlayerRepository.saveFavoritePlayer(userId, playerId);

    }

    public List<PlayerFollowed> getAllFavoritePlayersByUserId(Long userId) {

        return favoritePlayerRepository.getAllFavoritesByUserId(userId);

    }

    public void saveFavoriteTeam(Long userId, Long teamId) {

        favoriteTeamRepository.saveFavoriteTeam(userId, teamId);

    }

    public List<TeamFollowed> getAllFavoriteTeamsByUserId(Long userId) {

        return favoriteTeamRepository.getAllFavoritesByUserId(userId);

    }

    public void saveFavoriteLeague(Long userId, Long leagueId) {

        favoriteLeagueRepository.saveFavoriteLeague(userId, leagueId);

    }

    public List<LeagueFollowed> getAllFavoriteLeaguesByUserId(Long userId) {

        return favoriteLeagueRepository.getAllFavoritesByUserId(userId);

    }
    @Transactional
    public void removeFavoriteLeague(Long idUser, Long leagueId) {

        favoriteLeagueRepository.removeFavoriteLeague(idUser, leagueId);

    }
    @Transactional
    public void removeFavoriteTeam(Long idUser, Long teamId) {

        favoriteTeamRepository.removeFavoriteTeam(idUser, teamId);

    }
    @Transactional
    public void removeFavoritePlayer(Long idUser, Long playerId) {

        favoritePlayerRepository.removeFavoritePlayer(idUser, playerId);

    }

    
}
