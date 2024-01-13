### Endpoints

### 1. Get All Games by ID

Endpoint: /games/all_by_id

    Method: GET
    Parameters:
        id_games (required): ID of the game(s) to retrieve.

Example Request:

http

GET <http://localhost:8080/games/all_by_id?id_games=188478>

Example Response:

json

[
    {
        "idGames": 188478,
        "leagueId": 194,
        "date": "2023-01-11T08:00:00.000+00:00",
        "status": "FT",
        "scoreHome": "23,22,21,18,None,84",
        "scoreAway": "16,22,17,16,None,71",
        "teamHome": "Promitheas",
        "teamAway": "Trento"
    }
]

### 2. get All Games by Date

Endpoint: /games/all_by_date

    Method: GET
    Parameters:
        date (required): Date of the games to retrieve (format: YYYY-MM-DD).

Example Request:

http

GET <http://localhost:8080/games/all_by_date?date=2023-11-09>

Example Response:

json

[
    {
        "idGames": 356216,
        "leagueId": 120,
        "date": "2023-11-09T08:00:00.000+00:00",
        "status": "AOT",
        "scoreHome": "13,25,13,23,12,86",
        "scoreAway": "14,12,20,28,8,82",
        "teamHome": "Anadolu Efes",
        "teamAway": "Zalgiris Kaunas"
    },
    // ... (other game entries)
]

### 3. Get All Countries

Endpoint: /country/all

    Method: GET

Example Request:

http

GET <http://localhost:8080/country/all>

Example Response:

json

[
    "https://media-4.api-sports.io/flags/fr.svg,France",
    "https://media-4.api-sports.io/flags/de.svg,Germany",
    // ... (other country entries)
]

### 4. Get All Leagues

Endpoint: /league/all

    Method: GET

Example Request:

http

GET <http://localhost:8080/league/all>

Example Response:

json

[
    "LNB,https://media-4.api-sports.io/basketball/leagues/2.png",
    "BBL,https://media-4.api-sports.io/basketball/leagues/40.png",
    // ... (other league entries)
]

### 5. Get Standings for a Team in a Season

Endpoint: /standings/season

    Method: GET
    Parameters:
        idLeague (required): ID of the league.
        teamId (required): ID of the team.
        season (required): Season in the format YYYY-YYYY.

Example Request:

http

GET <http://localhost:8080/standings/season?idLeague=2&teamId=10&season=2022-2023>

Example Response:

json

{
    "idLeague": 2,
    "season": "2022-2023",
    // ... (other standings details)
}

### 6. Get Team Details by ID

 Endpoint: /team/all_by_id

    Method: GET
    Parameters:
        id (required): ID of the team.

Example Request:

http

GET <http://localhost:8080/team/all_by_id?id=10>

Example Response:

json

{
    "id": 10,
    "leagueId": 202,
    "name": "Dijon",
    "logo": "<https://media-4.api-sports.io/basketball/teams/10.png>"
}

### 7. Get All Teams

Endpoint: /team/all

    Method: GET

Example Request:

http

GET <http://localhost:8080/team/all>

Example Response:

json

[
    {
        "id": 10,
        "leagueId": 202,
        "name": "Dijon",
        "logo": "https://media-4.api-sports.io/basketball/teams/10.png"
    },
    // ... (other team entries)
]

User Favorites

### 8. Get Favorite Players for a User

Endpoint: /favorite/player

    Method: GET
    Parameters:
        userId (required): ID of the user.

Example Request:

http

GET <http://localhost:8080/favorite/player?userId=1>

Example Response:

json

[
    {
        "idUser": 1,
        "idPlayer": 23
    }
]

### 9. Add Player to User Favorites

Endpoint: /favorite/player

    Method: POST
    Parameters:
        userId (required): ID of the user.
        playerId (required): ID of the player.

Example Request:

http

POST <http://localhost:8080/favorite/player?userId=1&playerId=44>

### 10. Add Team to User Favorites

Endpoint: /favorite/team

    Method: POST
    Parameters:
        userId (required): ID of the user.
        teamId (required): ID of the team.

Example Request:

http

POST <http://localhost:8080/favorite/team?userId=1&teamId=44>

### 11. Add League to User Favorites

Endpoint: /favorite/league

    Method: POST
    Parameters:
        userId (required): ID of the user.
        leagueId (required): ID of the league.

Example Request:

http

POST <http://localhost:8080/favorite/league?userId=1&leagueId=44>

### 12. Get Favorite Leagues for a User

Endpoint: /favorite/league

    Method: GET
    Parameters:
        userId (required): ID of the user.

Example Request:

http

GET <http://localhost:8080/favorite/league?userId=1>

Example Response:

json

[
    {
        "idUser": 1,
        "idLeague": 13
    },
    // ... (other league entries)
]

### 13. Get Favorite Teams for a User

Endpoint: /favorite/team

    Method: GET
    Parameters:
        userId (required): ID of the user.

Example Request:

http

GET <http://localhost:8080/favorite/team?userId=1>

Example Response:

json

[
    {
        "idUser": 1,
        "idTeam": 13
    },
    // ... (other team entries)
]

User Management

### 14. Create User

Endpoint: /user/create

    Method: POST
    Parameters:
        name (required): User's name.
        surname (required): User's surname.
        email (required): User's email.
        password (required): User's password.

Example Request:

http

POST <http://localhost:8080/user/create?name=mario&surname=rossi&email=marior@g.go&password=%23adsfhkj231231>!

Example Response:

json

User created successfully

### 15. Get User by ID

Endpoint: /user/get/{id}

    Method: GET
    Parameters:
        id (required): ID of the user.

Example Request:

http

GET <http://localhost:8080/user/get/1>

Example Response:

json

{
    "name": "mario",
    "surname": "rossi",
    "email": "<m.r@o.coom>"
}

### 16. Get User by Email

Endpoint: /user/getByEmail

    Method: GET
    Parameters:
        email (required): Email of the user.

Example Request:

http

GET <http://localhost:8080/user/getByEmail?email=marior@g.go>

Example Response:

json

{
    "name": "mario",
    "surname": "rossi",
    "email": "<marior@g.go>"
}

Player Details

### 17. Get Player Details by ID

Endpoint: /player/number

    Method: GET
    Parameters:
        id (required): ID of the player.

Example Request:

http

GET <http://localhost:8080/player/number?id=501>

Example Response:

json

{
  "idPlayer": 501,
  "season": "2023-2024",
  "name": "Brian",
  "surname": "Moreno",
  "weight": 106,
  "height": 206,
  "idCountry": 48,
  "meshNumber": 4,
  "age": 23,
  "playedMin": 41,
  "pointScored": 1,
  "assist": 0,
  "idTeam": 718,
  "shots": 18,
  "shots2": 0,
  "shots3": 1,
  "freeThrows": 0,
  "ballHoldingTime": 81
}

### 18. Get All Players

Endpoint: /player/all

    Method: GET

Example Request:

http

GET <http://localhost:8080/player/all>

Example Response:

json

[
    {
        "idPlayer": 501,
        "season": "2024-2025",
        // ... (other player details)
    },
    // ... (other player entries)
]

### 19. Get Players for a Team

Endpoint: /player/team

    Method: GET
    Parameters:
        id_team (required): ID of the team.

Example Request:

http

GET <http://localhost:8080/player/team?id_team=718>

Example Response:

json

[
    {
        "id": 718,
        "idPlayer": 501,
        "season": "2024-2025",
        // ... (other player details)
    },
    // ... (other player entries)
]
