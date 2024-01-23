# Java Doc

## Entities

### Blog

Attributi:

    id_blog (Tipo: Long): Questo è l'identificatore univoco per ogni blog. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    id_user (Tipo: Long): Rappresenta l'ID dell'utente associato al blog.

    id_country (Tipo: Long): Rappresenta l'ID del paese associato al blog.

    id_league (Tipo: Long): Rappresenta l'ID della lega associata al blog.

    id_team (Tipo: Long): Rappresenta l'ID della squadra associata al blog.

    text (Tipo: String): Contiene il testo del blog.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "blog"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Country

Attributi:

    id_country (Tipo: Long): Questo è l'identificatore univoco per ogni paese. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    id_league (Tipo: Long): Rappresenta l'ID della lega associata al paese.

    name (Tipo: String): Contiene il nome del paese.

    type (Tipo: String): Rappresenta il tipo di paese.

    code (Tipo: String): Contiene un codice associato al paese.

    flag (Tipo: String): Contiene un'informazione relativa alla bandiera del paese.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "country"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Games

Attributi:

    id_games (Tipo: Long): Questo è l'identificatore univoco per ogni partita. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    leagueId (Tipo: Long): Rappresenta l'ID della lega associata alla partita.

    date (Tipo: Date): Rappresenta la data della partita.

    status (Tipo: String): Rappresenta lo stato della partita, con una definizione di colonna TEXT.

    homeId (Tipo: Long): Rappresenta l'ID della squadra di casa.

    score_home (Tipo: String): Rappresenta il punteggio della squadra di casa, con una definizione di colonna TEXT.

    awayId (Tipo: Long): Rappresenta l'ID della squadra ospite.

    score_away (Tipo: String): Rappresenta il punteggio della squadra ospite, con una definizione di colonna TEXT.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "games"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### League

Attributi:

    id_league (Tipo: Long): Questo è l'identificatore univoco per ogni lega. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    name (Tipo: String): Contiene il nome della lega.

    type (Tipo: String): Rappresenta il tipo di lega.

    logo (Tipo: String): Rappresenta il logo della lega. La presenza dell'annotazione @Lob indica che si tratta di un oggetto binario di grandi dimensioni, adatto a memorizzare immagini o dati di grandi dimensioni.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "league"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Player

Attributi:

    idPlayer (Tipo: Long): Questo è l'identificatore univoco per ogni giocatore. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    season (Tipo: String): Contiene la stagione del giocatore.

    name (Tipo: String): Contiene il nome del giocatore. La colonna è configurata per accettare massimo 35 caratteri.

    surname (Tipo: String): Contiene il cognome del giocatore. La colonna è configurata per accettare massimo 40 caratteri.

    weight (Tipo: int): Rappresenta il peso del giocatore.

    height (Tipo: int): Rappresenta l'altezza del giocatore.

    idCountry (Tipo: int): Rappresenta l'ID del paese di appartenenza del giocatore.

    meshNumber (Tipo: int): Rappresenta il numero di maglia del giocatore.

    age (Tipo: int): Rappresenta l'età del giocatore.

    playedMin (Tipo: int): Rappresenta il tempo giocato in minuti.

    pointScored (Tipo: int): Rappresenta il punteggio totalizzato dal giocatore.

    assist (Tipo: int): Rappresenta il numero di assist effettuati dal giocatore.

    idTeam (Tipo: int): Rappresenta l'ID della squadra di appartenenza del giocatore.

    shots (Tipo: int): Rappresenta il numero di tiri effettuati dal giocatore.

    shots2 (Tipo: int): Rappresenta il numero di tiri da due punti effettuati dal giocatore.

    shots3 (Tipo: int): Rappresenta il numero di tiri da tre punti effettuati dal giocatore.

    freeThrows (Tipo: int): Rappresenta il numero di tiri liberi effettuati dal giocatore.

    ballHoldingTime (Tipo: int): Rappresenta il tempo totale di possesso palla del giocatore.

    nationality (Tipo: String): Rappresenta la nazionalità del giocatore.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "players"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Standings

Attributi:

    idLeague (Tipo: Long): Rappresenta l'ID della lega associata alla classifica. È parte della chiave primaria dell'entità (@Id e @IdClass).

    season (Tipo: String): Rappresenta la stagione della classifica. È parte della chiave primaria dell'entità (@Id e @IdClass).

    teamId (Tipo: Long): Rappresenta l'ID della squadra associata alla classifica. È parte della chiave primaria dell'entità (@Id e @IdClass).

    position (Tipo: int): Rappresenta la posizione della squadra nella classifica.

    groupName (Tipo: String): Rappresenta il nome del gruppo a cui appartiene la squadra nella classifica.

    played (Tipo: int): Rappresenta il numero di partite giocate dalla squadra.

    win (Tipo: int): Rappresenta il numero di partite vinte dalla squadra.

    percWin (Tipo: float): Rappresenta la percentuale di partite vinte dalla squadra.

    lose (Tipo: int): Rappresenta il numero di partite perse dalla squadra.

    percLose (Tipo: float): Rappresenta la percentuale di partite perse dalla squadra.

    pointsFor (Tipo: int): Rappresenta il numero totale di punti fatti dalla squadra.

    pointsAgainst (Tipo: int): Rappresenta il numero totale di punti subiti dalla squadra.

    description (Tipo: String): Contiene una descrizione associata alla classifica. La colonna è configurata per accettare dati di tipo testo (TEXT).

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "standings"): Specifica il nome della tabella nel database associato a questa entità.

    @IdClass(StandingsId.class): Indica che la classe utilizza una classe ausiliaria (StandingsId) per gestire una chiave primaria composta da più colonne.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### Team

Attributi:

    id (Tipo: Long): Questo è l'identificatore univoco per ogni squadra. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    id_league (Tipo: Long): Rappresenta l'ID della lega associata alla squadra.

    name (Tipo: String): Contiene il nome della squadra.

    logo (Tipo: String): Contiene l'URL o il percorso del logo della squadra. La colonna è configurata per accettare dati di tipo testo (TEXT).

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "team"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile nelle operazioni di creazione di oggetti tramite reflection o framework di persistenza.

### User 

Attributi

    idUser (Tipo: Long): Questo è l'identificatore univoco per ogni utente. È annotato con @Id indicando che è la chiave primaria dell'entità. La generazione del valore dell'ID avviene in modo automatico e incrementale (GenerationType.IDENTITY).

    name (Tipo: String): Contiene il nome dell'utente.

    surname (Tipo: String): Contiene il cognome dell'utente.

    email (Tipo: String): Contiene l'indirizzo email dell'utente. La colonna è configurata come unica (unique = true), assicurando che ogni indirizzo email sia univoco nel database.

    password (Tipo: String): Contiene l'hash della password dell'utente. La colonna è configurata con una lunghezza minima (@Length(min = 6)) per garantire una password di almeno 6 caratteri.

Metodi:

    Costruttore: Il costruttore senza argomenti è generato automaticamente da Lombok (@NoArgsConstructor), mentre il costruttore con argomenti (public User(...)) viene utilizzato per inizializzare gli attributi dell'oggetto.

    encodePassword(String password): Metodo privato che prende in input una password e restituisce l'hash della password con l'aggiunta di un salt casuale. Utilizza l'algoritmo di hashing SHA-256.

    bytesToHex(byte[] bytes): Metodo privato che converte un array di byte in formato esadecimale, utilizzato per convertire l'hash della password in una rappresentazione leggibile.

Annotazioni:

    @Entity: Indica che questa classe è un'entità di persistenza JPA, cioè una classe che rappresenta una tabella nel database.

    @Table(name = "user"): Specifica il nome della tabella nel database associato a questa entità.

    @Getter e @Setter: Sono annotazioni di Lombok che generano automaticamente i metodi getter e setter per tutti gli attributi della classe.

    @EqualsAndHashCode: Genera automaticamente i metodi equals e hashCode sulla base degli attributi della classe.

    @NoArgsConstructor: Genera un costruttore senza argomenti, utile

---

## Repositories

### Blog 

Metodi definiti

    getPostById(Long id_blog): Ottiene un post tramite l'ID del blog.

    getAllPosts(): Ottiene tutti i post.

    getAllPostsWithUsers(): Ottiene tutti i post con informazioni sull'utente associato.

    getPostByCountry(Long id_country): Ottiene i post associati a un determinato paese.

    getPostByLeague(Long id_league): Ottiene i post associati a una determinata lega.

    getPostByTeam(Long id_team): Ottiene i post associati a una determinata squadra.

Note:

    ResponseBlog, ResponseBlogCountry, ResponseBlogLeague, e ResponseBlogTeam sono presunte classi di risposta contenenti i dati necessari per la risposta alle richieste specificate nelle query. Queste classi dovrebbero essere definite nel package rimbreaker.backend.payload.response.

    Le query utilizzano costruttori di proiezione (new) per mappare i risultati della query a oggetti delle classi di risposta specificate.

### Country

Metodi definiti:

    getCountry(Long id): Ottiene il flag e il nome di un paese per un dato ID. La query restituisce una lista di stringhe contenenti il flag e il nome del paese.

    getFlagAndName(): Ottiene l'ID, il flag e il nome di tutti i paesi. La query restituisce una lista di oggetti ResponseCountry, che rappresentano la risposta desiderata.

Note:

    ResponseCountry è presunta essere una classe di risposta contenente l'ID, il flag e il nome di un paese. Questa classe dovrebbe essere definita nel package rimbreaker.backend.payload.response.

### Games

Metodi definiti:

    getGameByDate(Date date): Ottiene le informazioni delle partite per una data specifica.

    getAllGamesWithTeams(int id_games): Ottiene tutte le informazioni di una partita con i loghi delle squadre.

    getGamesByCountry(Long id_country): Ottiene le informazioni delle partite per un determinato paese.

    getGamesByTeam(String name): Ottiene le informazioni delle partite per una determinata squadra.

    getGamesByLeague(String name): Ottiene le informazioni delle partite per una determinata lega.

Note:

    Le query utilizzano costruttori di proiezione (new) per mappare i risultati della query a oggetti delle classi di risposta specificate. Assicurati di avere definito correttamente le classi di risposta nei package rimbreaker.backend.payload.response.

### League 

Metodi definiti

    getLeague(Long id): Ottiene una lega per un dato ID.

    getLeagueAll(): Ottiene tutte le leghe.

    getTeamLeague(Long id): Ottiene le informazioni sulla lega e le squadre partecipanti per un dato ID di lega.

    getLeagueByCountry(Long id_country): Ottiene le informazioni sulla lega e il paese associato per un dato ID di paese.

    getCountryByLeague(): Ottiene le informazioni sul paese e la lega associata per tutte le leghe e paesi.

### Player

Metodi definiti:

    getPlayerById(Long id): Ottiene un giocatore per un dato ID.

    getPlayersByTeam(Long id_team): Ottiene i giocatori di una squadra per un dato ID di squadra.

    getAllPlayers(): Ottiene tutti i giocatori.

### Standings

Metodi definiti:

    getSeason(Long idLeague, Long teamId, String season): Ottiene la classifica per una determinata lega, squadra e stagione.

    getSeasonByLeague(Long idLeague, String season): Ottiene la classifica per una determinata lega e stagione con informazioni sulla squadra.

### Team

Metodi definiti:

    getTeam(Long id): Ottiene il nome e il logo di una squadra per un dato ID di squadra.

    getAllByID(Long id): Ottiene tutte le informazioni su una squadra per un dato ID di squadra.

    getAll(): Ottiene tutte le informazioni su tutte le squadre.

### User

Metodi definiti:

    newUser(String name, String surname, String email, String password): Inserisce un nuovo utente nel database.

    all_by_id(Long idUser): Ottiene tutte le informazioni di un utente per un dato ID di utente.

    findByEmail(String email): Trova un utente per un dato indirizzo email.

    updateEmail(String email, Long idUser): Aggiorna l'indirizzo email di un utente per un dato ID di utente.

    updatePassword(String password, Long idUser): Aggiorna la password di un utente per un dato ID di utente.

    deleteUser(Long idUser): Elimina un utente per un dato ID di utente.

    login(String email, String password): Esegue il login, verifica l'indirizzo email e la password restituendo un utente opzionale.

---

## Services

### Blog

Servizi definiti:

    getPostById(Long id_post): crea una ResponseEntity richiamando da blogRepository la funzione getPostsById() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)
    
    getAllPosts(): crea una ResponseEntity richiamando da blogRepository la funzione getAllPosts() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getAllPostsWithUsers(): crea una ResponseEntity richiamando da blogRepository la funzione getAllPostsWithUsers() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getPostByCountry(Long id): crea una ResponseEntity richiamando da blogRepository la funzione getPostsByCountry() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getPostByLeague(Long id): crea una ResponseEntity richiamando da blogRepository la funzione getPostsByLeague() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getPostByTeam(Long id): crea una ResponseEntity richiamando da blogRepository la funzione getPostsByTeam() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

### Country

Servizi definiti:

    getCountry(Long id): crea una ResponseEntity richiamando da countryRepository la funzione getCountry() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)
    
    getFlagAndName():crea una ResponseEntity richiamando da countryRepository la funzione getFlagAndName() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)


### Favorite

Servizi definiti:

    saveFavoritePlayer(Long userId, Long playerId): richiama da favoritePlayerRepository la funzione saveFavoritePlayer(), salvando i dati sul database
    
    saveFavoriteTeam(Long userId, Long teamId): richiama da favoriteTeamRepository la funzione saveFavoriteTeam(), salvando i dati sul database

    saveFavoriteLeague(LOng userId, Long leagueId): richiama da favoriteLeagueRepository la funzione saveFavoriteLeague(), salvando i dati sul database

    getAllFavoritePlayersByUserId(Long userId): richiama da favoritePlayerRepository la funzione getAllFavoritePlayersByUserId(), riorganizzando i dati in una lista di oggetti

    getAllFavoriteTeamsByUserId(Long userId): richiama da favoriteTeamRepository la funzione getAllFavoriteTeamsByUserId(), riorganizzando i dati in una lista di oggetti

    getAllFavoriteLeaguesByUserId(Long userId): richiama da favoriteLeagueRepository la funzione getAllFavoriteLeaguesByUserId(), riorganizzando i dati in una lista di oggetti

### Games

Servizi definiti:

    getAllGamesWithTeam(int id_games): crea una ResponseEntity richiamando da gameRepository la funzione getAllGamesWithTeams() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)
    
    getGamesByDate(String date): crea una ResponseEntity richiamando da gameRepository la funzione getGamesByDate() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getGamesByCountry(Long id): crea una ResponseEntity richiamando da gameRepository la funzione getGamesByCountry() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getGamesByTeam(String name): crea una ResponseEntity richiamando da gameRepository la funzione getGamesByTeam() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getGamesByLeague(String name): crea una ResponseEntity richiamando da gameRepository la funzione getGamesByLeague() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)


### League

Servizi definiti:

    getLeague(Long id): crea una ResponseEntity richiamando da leagueRepository la funzione getLeague() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)
    
    getLeagueAll(): crea una ResponseEntity richiamando da leagueRepository la funzione getLeagueAll() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getTeamLeague(Long id): crea una ResponseEntity richiamando da leagueRepository la funzione getTeamLeague() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getLeagueByCountry(Long id): crea una ResponseEntity richiamando da leagueRepository la funzione getLeagueByCountry() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getCountryByLeague(): crea una ResponseEntity richiamando da leagueRepository la funzione getCountryByLeague() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)


### Player

Servizi definiti:

    getPlayerById(Long id):  crea una ResponseEntity richiamando da playerRepository la funzione getPlayerById() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)
    
    getPlayerByTeam(Long id_team):  crea una ResponseEntity richiamando da playerRepository la funzione getPlayerByTeam() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getAllPlayers():  crea una ResponseEntity richiamando da playerRepository la funzione getAllPlayers() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

### Standings

Servizi definiti:

    getSeason(Long idLeague, Long teamId, String season):  crea una ResponseEntity richiamando da standingsRepository la funzione getSeason() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)
    
    getSeasonByLeague(Long idLeague, String season):  crea una ResponseEntity richiamando da standingsRepository la funzione getSeasonByLeague() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)


### Team

Servizi definiti:

    getTeam(Long id):  crea una ResponseEntity richiamando da teamRepository la funzione getTeam() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)
    
    getAllByID(Long id):  crea una ResponseEntity richiamando da teamRepository la funzione getAllByID() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)

    getAll():  crea una ResponseEntity richiamando da teamRepository la funzione getAll() con conseguente controllo per la corretta uscita di dati (HttpStatus.OK / HttpStatus.BAD_REQUEST)


### User

Servizi definiti:

    createUser(String name, String surname, String email, String password): richiama da userRepository la funzione newUser() e crea un nuovo oggetto User con incluso nome, cognome, email e password criptata
    
    getUserById(Long idUser): richiama da userRepository la funzione all_by_id() e ritorna l'oggetto User con l'id richiesto

    getUserByEmail(String email): richiama da userRepository la funzione updateEmail() e ritorna l'oggetto User con l'email specificata

    updateEmail(String email, Long idUser): richiama da userRepository la funzione updateEmail() e aggiorna l'email dell'oggetto User all'interno del database

    updatePassword(String password, Long idUser): richiama da userRepository la funzione updatePassword() e aggiorna la password dell'oggetto User all'interno del database

    deleteUser(Long idUser): richiama da userRepository la funzione deleteUser() ed elimina l'oggetto User dal database

    login(String email, String password): richiama da userRepository la funzione login() e conferma se le informazioni date sono uguali all'oggetto User all'interno del database per fa accedere l'utente alla pagina web

---

## Controllers

![Funzione Controller](apidocumentation.md)