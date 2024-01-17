## Request Mapping

### /blog

Endpoint: Get Post by ID

    Path: /post
    Method: GET
    Parameter: Long id_post
    Calls the getPostById method of the injected BlogService to retrieve a blog post by its ID.
    http:
    json:

Endpoint: Get All Posts

    Path: /all
    Method: GET
    Calls the getAllPosts method of the injected BlogService to retrieve all blog posts.

Endpoint: Get All Posts with Users

    Path: /users
    Method: GET
    Calls the getAllPostsWithUsers method of the injected BlogService to retrieve all blog posts with associated users.

Endpoint: Get Post by Country

    Path: /post_country
    Method: GET
    Parameter: Long id
    Calls the getPostByCountry method of the injected BlogService to retrieve blog posts based on a specific country.

Endpoint: Get Post by League

    Path: /post_league
    Method: GET
    Parameter: Long id
    Calls the getPostByLeague method of the injected BlogService to retrieve blog posts based on a specific league.

Endpoint: Get Post by Team

    Path: /post_team
    Method: GET
    Parameter: Long id
    Calls the getPostByTeam method of the injected BlogService to retrieve blog posts based on a specific team.

## Request Mapping

### /country

Endpoint: Get Country by ID

    Path: /number
    Method: GET
    Parameter: Long id
    Calls the getCountry method of the injected CountryService to retrieve details about a specific country based on its ID.

Endpoint: Get All Countries

    Path: /all
    Method: GET
    Calls the getFlagAndName method of the injected CountryService to retrieve a list of all countries along with their flags and names.

Usage of ResponseEntity:

    The controller methods return ResponseEntity<?>, indicating that the response can be of any type. This allows flexibility in handling different response types.

Dependency Injection:

    The CountryController depends on the CountryService, suggesting that the actual logic for handling country-related operations is implemented in the CountryService class.

## Request Mapping

### /favorite

Endpoint: Add Player to Favorites

    Path: /player
    Method: POST
    Parameters: Long userId, Long playerId
    Calls the saveFavoritePlayer method of the injected FavoriteService to add a player to the user's favorites.

Endpoint: Get All Favorite Players for a User

    Path: /player
    Method: GET
    Parameter: Long userId
    Calls the getAllFavoritePlayersByUserId method of the injected FavoriteService to retrieve a list of all favorite players for a specific user.

Endpoint: Add Team to Favorites

    Path: /team
    Method: POST
    Parameters: Long userId, Long teamId
    Calls the saveFavoriteTeam method of the injected FavoriteService to add a team to the user's favorites.

Endpoint: Get All Favorite Teams for a User

    Path: /team
    Method: GET
    Parameter: Long userId
    Calls the getAllFavoriteTeamsByUserId method of the injected FavoriteService to retrieve a list of all favorite teams for a specific user.

Endpoint: Add League to Favorites

    Path: /league
    Method: POST
    Parameters: Long userId, Long leagueId
    Calls the saveFavoriteLeague method of the injected FavoriteService to add a league to the user's favorites.

Endpoint: Get All Favorite Leagues for a User

    Path: /league
    Method: GET
    Parameter: Long userId
    Calls the getAllFavoriteLeaguesByUserId method of the injected FavoriteService to retrieve a list of all favorite leagues for a specific user.
Endpoint: Get Games by Date

    Path: /all_by_date
    Method: GET
    Parameter: String date
    Calls the getGamesByDate method of the injected GamesService to retrieve all games that occurred on a specific date.

Endpoint: Get All Games with Teams by ID

    Path: /all_by_id
    Method: GET
    Parameter: int id_games
    Calls the getAllGamesWithTeams method of the injected GamesService to retrieve details about a specific game by its ID.

Endpoint: Get Games by Country

    Path: /games_country
    Method: GET
    Parameter: Long id
    Calls the getGamesByCountry method of the injected GamesService to retrieve games based on a specific country.

Endpoint: Get Games by Team

    Path: /games_team
    Method: GET
    Parameter: String name
    Calls the getGamesByTeam method of the injected GamesService to retrieve games based on a specific team.

Endpoint: Get Games by League

    Path: /games_league
    Method: GET
    Parameter: String name
    Calls the getGamesByLeague method of the injected GamesService to retrieve games based on a specific league.

Commented-out Endpoints:

    There are commented-out endpoints (/dates, /status, /score_home, /score_away, /team_playing) that seem to be placeholders for additional functionality. If needed, these endpoints can be uncommented and implemented in the future.

## Request Mapping

### /games

Endpoint: Get Games by Date

    Path: /all_by_date
    Method: GET
    Parameter: String date
    Calls the getGamesByDate method of the injected GamesService to retrieve all games that occurred on a specific date.

Endpoint: Get All Games with Teams by ID

    Path: /all_by_id
    Method: GET
    Parameter: int id_games
    Calls the getAllGamesWithTeams method of the injected GamesService to retrieve details about a specific game by its ID.

Endpoint: Get Games by Country

    Path: /games_country
    Method: GET
    Parameter: Long id
    Calls the getGamesByCountry method of the injected GamesService to retrieve games based on a specific country.

Endpoint: Get Games by Team

    Path: /games_team
    Method: GET
    Parameter: String name
    Calls the getGamesByTeam method of the injected GamesService to retrieve games based on a specific team.

Endpoint: Get Games by League

    Path: /games_league
    Method: GET
    Parameter: String name
    Calls the getGamesByLeague method of the injected GamesService to retrieve games based on a specific league.

Commented-out Endpoints:

    There are commented-out endpoints (/dates, /status, /score_home, /score_away, /team_playing) that seem to be placeholders for additional functionality. If needed, these endpoints can be uncommented and implemented in the future.

## Request Mapping

### /league

Endpoint: Get League by ID

    Path: /number
    Method: GET
    Parameter: Long id
    Calls the getLeague method of the injected LeagueService to retrieve details about a specific league based on its ID.

Endpoint: Get All Leagues

    Path: /all
    Method: GET
    Calls the getLeagueAll method of the injected LeagueService to retrieve details about all leagues, possibly for a dashboard.

Endpoint: Get Teams in a League

    Path: /team_league
    Method: GET
    Parameter: Long id
    Calls the getTeamLeague method of the injected LeagueService to retrieve teams associated with a specific league.

Endpoint: Get Leagues by Country

    Path: /league_country
    Method: GET
    Parameter: Long id
    Calls the getLeagueByCountry method of the injected LeagueService to retrieve leagues based on a specific country.

Endpoint: Get Country by League

    Path: /country_by_league
    Method: GET
    Calls the country_by_league method of the injected LeagueService to retrieve information about countries associated with leagues.

## Request Mapping

### /player

Endpoint: Get Player by ID

    Path: /number
    Method: GET
    Parameter: Long id
    Calls the getPlayerById method of the injected PlayerService to retrieve details about a specific player based on their ID.

Endpoint: Get All Players

    Path: /all
    Method: GET
    Calls the getAllPlayers method of the injected PlayerService to retrieve details about all players.

Endpoint: Get Players by Team

    Path: /team
    Method: GET
    Parameter: Long id_team
    Calls the getPlayersByTeam method of the injected PlayerService to retrieve details about players associated with a specific team.

## Request Mapping

### /standings

Endpoint: Get Standings for a Team in a Season

    Path: /season
    Method: GET
    Parameters: Long idLeague, Long teamId, String season
    Calls the getSeason method of the injected StandingsService to retrieve standings for a specific team in a given season and league.

Endpoint: Get Standings for All Teams in a League

    Path: /all_by_league
    Method: GET
    Parameters: Long idLeague, String season
    Calls the all_by_league method of the injected StandingsService to retrieve standings for all teams in a given season and league.

## Request Mapping

### /team

Endpoint: Get Team by ID

    Path: /number
    Method: GET
    Parameter: Long id
    Calls the getTeam method of the injected TeamService to retrieve details about a specific team based on its ID.

Endpoint: Get All Team Details by ID

    Path: /all_by_id
    Method: GET
    Parameter: Long id
    Calls the getAllByID method of the injected TeamService to retrieve specific information about a team based on its ID.

Endpoint: Get All Teams

    Path: /all
    Method: GET
    Calls the getAll method of the injected TeamService to retrieve details about all teams, possibly for a dashboard.

## Request Mapping

### /user

Endpoint: Create User

    Path: /create
    Method: POST
    Parameters: String name, String surname, String email, String password
    Calls the createUser method of the injected UserService to create a new user.

Endpoint: Get User by ID

    Path: /get
    Method: GET
    Parameter: Long idUser
    Calls the getUserById method of the injected UserService to retrieve user details by ID.

Endpoint: Get User by Email

    Path: /getEmail
    Method: GET
    Parameter: String email
    Calls the getUserByEmail method of the injected UserService to retrieve user details by email.

Endpoint: Update Email

    Path: /updateEmail
    Method: POST
    Parameters: String email, Long idUser
    Calls the updateEmail method of the injected UserService to update the user's email.

Endpoint: Update Password

    Path: /updatePassword
    Method: POST
    Parameters: String password, Long idUser
    Calls the updatePassword method of the injected UserService to update the user's password.

Endpoint: Delete User

    Path: /delete
    Method: POST
    Parameter: Long idUser
    Calls the deleteUser method of the injected UserService to delete a user.

Endpoint: User Login

    Path: /login
    Method: POST
    Parameters: String email, String password
    Calls the login method of the injected UserService for user authentication.
